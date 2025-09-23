function ShowProjectsBtn() {
  return (
    <div className={Styles.projectContainer}>
      {projects.map((project) => (
        <iframe
          key={project.name}
          src={project.src}
          title={project.name}
          className={Styles.projectIframe}
        ></iframe>
      ))}
    </div>
  );
}

export default ShowProjectsBtn;
