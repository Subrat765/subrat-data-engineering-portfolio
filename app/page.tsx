import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Linkedin, Mail, Calendar, MapPin, Award } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  const skills = [
    "Python", "SQL", "Spark", "Airflow", "dbt", "Kafka", 
    "Snowflake", "BigQuery", "Databricks", "Docker", 
    "Terraform", "GitHub Actions", "AWS"
  ];

  const certifications = [
    { name: "AWS Certified Data Engineer", year: "2024" },
    { name: "GCP Professional Data Engineer", year: "2023" },
    { name: "Snowflake SnowPro Core", year: "2023" }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {siteConfig.name.split(" — ")[0]}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            {siteConfig.name.split(" — ")[1]}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {siteConfig.description}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {siteConfig.location}
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            Available for opportunities
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button asChild>
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={`mailto:${siteConfig.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
            <CardDescription>
              Technologies and tools I work with regularly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Certifications Section */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Certifications
            </CardTitle>
            <CardDescription>
              Professional certifications and achievements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="p-4 border rounded-lg">
                  <h4 className="font-medium">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.year}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects Preview */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Button variant="outline" asChild>
            <Link href="/projects">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            Project showcase coming soon! Check back for detailed case studies of my data engineering work.
          </p>
          <Button asChild>
            <Link href="/projects">Explore Projects</Link>
          </Button>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Let's Build Something Together</h2>
            <p className="text-muted-foreground mb-6">
              I'm always interested in discussing data engineering challenges and opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
