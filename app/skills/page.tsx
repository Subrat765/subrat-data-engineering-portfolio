import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Technical skills and expertise in data engineering, programming, and analytics.',
}

interface Skill {
  name: string
  level: number
  category: string
}

const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 95, category: 'Programming' },
  { name: 'SQL', level: 90, category: 'Programming' },
  { name: 'Scala', level: 75, category: 'Programming' },
  { name: 'Java', level: 70, category: 'Programming' },
  { name: 'JavaScript/TypeScript', level: 80, category: 'Programming' },
  { name: 'R', level: 65, category: 'Programming' },
  
  // Big Data & Analytics
  { name: 'Apache Spark', level: 90, category: 'Big Data' },
  { name: 'Apache Kafka', level: 85, category: 'Big Data' },
  { name: 'Hadoop', level: 75, category: 'Big Data' },
  { name: 'Apache Airflow', level: 80, category: 'Big Data' },
  { name: 'Databricks', level: 85, category: 'Big Data' },
  { name: 'Snowflake', level: 80, category: 'Big Data' },
  
  // Cloud Platforms
  { name: 'AWS', level: 85, category: 'Cloud' },
  { name: 'Azure', level: 75, category: 'Cloud' },
  { name: 'Google Cloud Platform', level: 70, category: 'Cloud' },
  
  // Databases
  { name: 'PostgreSQL', level: 85, category: 'Database' },
  { name: 'MongoDB', level: 75, category: 'Database' },
  { name: 'Redis', level: 70, category: 'Database' },
  { name: 'Cassandra', level: 65, category: 'Database' },
  
  // Tools & Technologies
  { name: 'Docker', level: 80, category: 'DevOps' },
  { name: 'Kubernetes', level: 70, category: 'DevOps' },
  { name: 'Terraform', level: 75, category: 'DevOps' },
  { name: 'Git', level: 90, category: 'DevOps' },
  { name: 'Jenkins', level: 70, category: 'DevOps' },
]

const categories = [...new Set(skills.map(skill => skill.category))]

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Programming': 'bg-blue-100 text-blue-800',
    'Big Data': 'bg-green-100 text-green-800',
    'Cloud': 'bg-purple-100 text-purple-800',
    'Database': 'bg-orange-100 text-orange-800',
    'DevOps': 'bg-red-100 text-red-800',
  }
  return colors[category] || 'bg-gray-100 text-gray-800'
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Technical Skills</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise in data engineering, 
            cloud platforms, and software development.
          </p>
        </div>

        <div className="grid gap-8">
          {categories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category)
            return (
              <Card key={category} className="">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge className={getCategoryColor(category)}>
                      {category}
                    </Badge>
                    <span className="text-2xl font-bold">{category}</span>
                  </CardTitle>
                  <CardDescription>
                    {categorySkills.length} skills in {category.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {categorySkills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="inline-block p-6">
            <CardContent className="pt-0">
              <h3 className="text-xl font-semibold mb-2">Always Learning</h3>
              <p className="text-muted-foreground">
                I'm continuously expanding my skill set and staying updated with the latest 
                technologies in data engineering and cloud computing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
