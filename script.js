const projectsGrid = document.getElementById('projects-grid');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

const createProjectCard = (project) => {
  const article = document.createElement('article');
  article.className = 'project-card';

  const tags = project.stack
    .map((item) => `<span class="tag">${item}</span>`)
    .join('');

  article.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.summary}</p>
    <div class="tags" aria-label="Technology stack">${tags}</div>
    <div class="links">
      <a href="${project.repo}" target="_blank" rel="noreferrer noopener">Repository</a>
      <a href="${project.demo}" target="_blank" rel="noreferrer noopener">Live demo</a>
    </div>
  `;

  return article;
};

const renderProjects = async () => {
  try {
    const response = await fetch('content/projects.json');
    if (!response.ok) throw new Error('Could not load projects');

    const projects = await response.json();
    const fragment = document.createDocumentFragment();

    projects.forEach((project) => {
      fragment.append(createProjectCard(project));
    });

    projectsGrid.textContent = '';
    projectsGrid.append(fragment);
  } catch (error) {
    projectsGrid.innerHTML = '<p>Could not load projects. Update content/projects.json and retry.</p>';
    console.error(error);
  }
};

renderProjects();
