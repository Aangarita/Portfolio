import './Skills.css'

export function Skills () {

const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript"},
        { name: "React"},
        { name: "CSS3"},
        { name: "HTML5"}
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js"},
        { name: "Express"},
        { name: "MongoDB"},
        { name: "PostgreSQL"}
      ]
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git"},
        { name: "Figma"}
      ]
    }
  ]


  return (
    <section id='skills' className='skills-section'>
      <div className='skills-container'>
        <div className='skills-header'>
          <h2>Habilidades Técnicas</h2>
          <p>Dominio de tecnologías modernas para el desarrollo web full stack</p>
        </div>
        <div className='skills-grid'>
          {skillCategories.map((category) => (
            <div className='skill-category'>
                <h3 className='category-title'>{category.title}</h3>
                <div className='skill-list'>
                  {category.skills.map((skill) => (
                    <span className='skill-name'>➜ {skill.name}</span>
                  ))}
                </div>
            </div>
          ))}
        </div>

      </div>


    </section>
  )
}