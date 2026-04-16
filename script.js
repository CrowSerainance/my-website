const projectsGrid = document.getElementById('projects-grid');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const createLink = (href, label) => {
  const anchor = document.createElement('a');
  anchor.href = href;
  anchor.target = '_blank';
  anchor.rel = 'noreferrer noopener';
  anchor.textContent = label;
  return anchor;
};

const createProjectCard = (project) => {
  const article = document.createElement('article');
  article.className = 'project-card';

  const title = document.createElement('h3');
  title.textContent = project.title;

  const summary = document.createElement('p');
  summary.textContent = project.summary;

  const tags = document.createElement('div');
  tags.className = 'tags';
  tags.setAttribute('aria-label', 'Technology stack');

  project.stack.forEach((item) => {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = item;
    tags.append(tag);
  });

  const links = document.createElement('div');
  links.className = 'links';
  links.append(createLink(project.repo, 'Repository'), createLink(project.demo, 'Live demo'));

  article.append(title, summary, tags, links);

  return article;
};

const renderProjects = async () => {
  if (!projectsGrid) return;

  try {
    const response = await fetch('content/projects.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('Could not load projects');

    const projects = await response.json();
    const fragment = document.createDocumentFragment();

    for (const project of projects) {
      fragment.append(createProjectCard(project));
    }

    projectsGrid.replaceChildren(fragment);
  } catch (error) {
    const fallback = document.createElement('p');
    fallback.textContent = 'Could not load projects. Update content/projects.json and retry.';
    projectsGrid.replaceChildren(fallback);
    console.error(error);
  }
};

renderProjects();
