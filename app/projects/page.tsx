import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, TrendingUp } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Real-time Customer Events Pipeline",
      description: "Scalable streaming data pipeline processing millions of customer events daily with sub-minute latency guarantees.",
      technologies: ["Kafka", "Spark Streaming", "Delta Lake", "Databricks", "S3", "Airflow"],
      highlights: [
        "CDC implementation with SCD2 patterns",
        "Schema registry for data governance",
        "Dead letter queues for error handling",
        "Cost optimization with automated scaling"
      ],
      impact: "95th-percentile latency: 10m → 90s, Data freshness SLA: 5m",
      year: "2024",
      status: "Production"
    },
    {
      id: 2,
      title: "Data Warehouse Modernization",
      description: "Complete ELT transformation migrating legacy ETL processes to modern cloud data warehouse with dbt.",
      technologies: ["Fivetran", "dbt", "Snowflake", "Great Expectations", "Terraform", "GitHub Actions"],
      highlights: [
        "Automated data quality testing",
        "Complete data lineage documentation",
        "Infrastructure as Code deployment",
        "CI/CD pipeline for transformations"
      ],
      impact: "40% cost reduction, 99.9% model reliability, Full lineage visibility",
      year: "2023",
      status: "Production"
    },
    {
      id: 3,
      title: "Batch Processing with Quality Gates",
      description: "Robust batch ingestion system with comprehensive data quality monitoring and automated alerting.",
      technologies: ["Python", "Airflow", "S3", "Redshift", "Great Expectations", "Metabase"],
      highlights: [
        "Multi-source data ingestion",
        "Automated quality profiling",
        "Slack integration for alerts",
        "Self-service analytics dashboards"
      ],
      impact: "Bad-record rate ↓ 83%, Pipeline failures ↓ 60%",
      year: "2023",
      status: "Production"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Data Engineering Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A showcase of production data engineering solutions I've built, focusing on scalability, 
          reliability, and business impact. Each project demonstrates modern data engineering practices 
          and measurable outcomes.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </div>
                <div className="flex gap-2 items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {project.year}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                {/* Business Impact */}
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <h4 className="font-semibold">Business Impact</h4>
                  </div>
                  <p className="text-sm">{project.impact}</p>
                </div>

                {/* Status */}
                <div className="flex justify-between items-center pt-2">
                  <Badge variant={project.status === 'Production' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>
                      <Github className="mr-2 h-4 w-4" />
                      Code (Private)
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo (Internal)
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-12 text-center">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Interested in Learning More?</h2>
            <p className="text-muted-foreground mb-6">
              I'd be happy to discuss these projects in detail and share insights about 
              data engineering architecture, implementation challenges, and lessons learned.
            </p>
            <Button asChild>
              <a href="mailto:subrat.mallick@example.com">
                Let's Talk About Data Engineering
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
