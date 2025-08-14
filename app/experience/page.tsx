import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'My professional experience in data engineering and software development.'
}

export default function ExperiencePage() {
  const experiences = [
    {
      title: 'Senior Data Engineer',
      company: 'Tech Innovation Labs',
      period: '2023 - Present',
      achievements: [
        'Designed and implemented a real-time data pipeline processing 10M+ events daily',
        'Reduced data processing costs by 40% through Apache Spark optimization',
        'Built ML feature store using Feast and Redis, improving model deployment speed by 60%',
        'Led migration from legacy ETL to modern ELT architecture using dbt and Snowflake'
      ],
      techStack: ['Python', 'Apache Spark', 'Snowflake', 'dbt', 'Kafka', 'Docker', 'Kubernetes']
    },
    {
      title: 'Data Engineer',
      company: 'DataFlow Solutions',
      period: '2021 - 2023',
      achievements: [
        'Developed automated data quality monitoring system reducing data issues by 75%',
        'Built scalable ETL pipelines for client onboarding, handling 50+ data sources',
        'Implemented CDC processes for real-time synchronization between OLTP and OLAP systems',
        'Created comprehensive data documentation and lineage tracking using DataHub'
      ],
      techStack: ['Python', 'Airflow', 'PostgreSQL', 'AWS', 'Terraform', 'Pandas', 'SQL']
    },
    {
      title: 'Junior Software Developer',
      company: 'StartupTech Inc',
      period: '2020 - 2021',
      achievements: [
        'Developed REST APIs for customer management system serving 100K+ users',
        'Optimized database queries improving application response time by 50%',
        'Implemented CI/CD pipelines reducing deployment time from hours to minutes',
        'Built responsive web interfaces using React and TypeScript'
      ],
      techStack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'Jenkins', 'Git']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            My journey in data engineering and software development, building scalable systems and driving innovation.
          </p>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h2>
                    <h3 className="text-xl text-purple-300 font-semibold">
                      {exp.company}
                    </h3>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block bg-purple-600/30 text-purple-200 px-4 py-2 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Key Achievements & Impact
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-700/50 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready for New Challenges
              </h3>
              <p className="text-gray-300 mb-6">
                I'm passionate about building data-driven solutions that create real business value.
                Let's discuss how I can contribute to your team's success.
              </p>
              <a
                href="/contact"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
