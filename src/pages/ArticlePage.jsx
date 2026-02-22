import { useParams, Link } from "react-router-dom";
import "../styles/pages/article-page.css";

const articlesData = [
  {
    slug: "5-signs-safety-culture-needs-refresh",
    title: "5 Signs Your Safety Culture Needs a Refresh",
    category: "HSE Culture",
    description: "Learn the warning signs that indicate it's time to reinvigorate your workplace safety culture and take corrective action.",
    content: `
      <h2>Introduction</h2>
      <p>A strong safety culture is the foundation of any successful workplace safety program. However, even the best safety cultures can become stagnant over time. Recognizing the warning signs early can help prevent incidents and maintain a safe work environment.</p>
      
      <h2>1. Increased Incident Rates</h2>
      <p>If you've noticed a gradual increase in near-misses, first aid cases, or recordable injuries, this is a clear indicator that your safety culture may need attention. Don't wait for a serious incident to occur before taking action.</p>
      
      <h2>2. Complacency Among Workers</h2>
      <p>When workers stop actively looking for hazards or skip safety procedures because "nothing ever happens," complacency has set in. This mindset is one of the biggest threats to workplace safety.</p>
      
      <h2>3. Lack of Safety Engagement</h2>
      <p>Are safety meetings poorly attended? Do workers rarely report hazards or suggest safety improvements? Low engagement is a sign that safety has become just another box to check rather than a core value.</p>
      
      <h2>4. Outdated Safety Procedures</h2>
      <p>If your safety procedures haven't been reviewed or updated in years, they likely don't reflect current best practices or address new hazards that have emerged in your workplace.</p>
      
      <h2>5. Poor Communication About Safety</h2>
      <p>When safety information flows downward but not upward, or when there's no open dialogue about safety concerns, your culture may be suffering from communication breakdowns.</p>
      
      <h2>Conclusion</h2>
      <p>Recognizing these signs early and taking proactive steps to refresh your safety culture can prevent incidents and build a stronger, more engaged workforce. Start by involving workers in the process and demonstrating leadership commitment to safety.</p>
    `
  },
  {
    slug: "critical-role-toolbox-talks-hazard-prevention",
    title: "The Critical Role of Toolbox Talks in Hazard Prevention",
    category: "Hazard Awareness",
    description: "Discover why daily toolbox talks are essential for hazard awareness and how to make them effective.",
    content: `
      <h2>Introduction</h2>
      <p>Toolbox talks are a cornerstone of effective workplace safety programs. These brief, focused meetings provide an opportunity to address specific hazards and reinforce safety messages before work begins.</p>
      
      <h2>Why Toolbox Talks Matter</h2>
      <p>Daily toolbox talks serve multiple important purposes:</p>
      <ul>
        <li><strong>Hazard Identification:</strong> They help workers identify specific hazards in their work area</li>
        <li><strong>Communication:</strong> They create a platform for two-way safety communication</li>
        <li><strong>Awareness:</strong> They keep safety at the forefront of workers' minds</li>
        <li><strong>Compliance:</strong> They help meet regulatory requirements for safety training</li>
      </ul>
      
      <h2>Making Toolbox Talks Effective</h2>
      <p>To get the most out of toolbox talks:</p>
      <ul>
        <li>Keep them short and focused (10-15 minutes)</li>
        <li>Relate topics to current work activities</li>
        <li>Encourage questions and discussion</li>
        <li>Use visual aids and real examples</li>
        <li>Document attendance and topics covered</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>When done consistently and effectively, toolbox talks can significantly reduce workplace incidents and build a stronger safety culture. Make them a non-negotiable part of your daily routine.</p>
    `
  },
  {
    slug: "common-osha-violations-prevention",
    title: "Common OSHA Violations and How to Prevent Them",
    category: "Regulatory Compliance",
    description: "Understand the top OSHA violations and practical strategies to ensure compliance.",
    content: `
      <h2>Introduction</h2>
      <p>OSHA's most frequently cited violations provide valuable insights into common workplace hazards. Understanding these violations can help you prioritize your safety efforts and avoid costly penalties.</p>
      
      <h2>Top OSHA Violations</h2>
      <ol>
        <li><strong>Falls</strong> - The leading cause of death in construction</li>
        <li><strong>Hazard Communication</strong> - Improper labeling and SDS management</li>
        <li><strong>Scaffolding</strong> - Improper assembly and use</li>
        <li><strong>Respiratory Protection</strong> - Inadequate protection programs</li>
        <li><strong>Lockout/Tagout</strong> - Failure to control hazardous energy</li>
      </ol>
      
      <h2>Prevention Strategies</h2>
      <p>To prevent these violations:</p>
      <ul>
        <li>Conduct regular safety audits</li>
        <li>Maintain proper documentation</li>
        <li>Provide ongoing training</li>
        <li>Implement written safety programs</li>
        <li>Address hazards promptly</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>By understanding common OSHA violations and implementing proactive safety measures, you can protect your workers and avoid costly citations. Regular self-inspections and continuous improvement are key to maintaining compliance.</p>
    `
  },
  {
    slug: "building-psychological-safety-jobsite",
    title: "Building Psychological Safety on the Jobsite",
    category: "Team Leadership",
    description: "Explore how psychological safety improves reporting and overall workplace safety outcomes.",
    content: `
      <h2>Introduction</h2>
      <p>Psychological safety—the belief that one won't be punished for making mistakes or speaking up—is crucial for creating a truly safe workplace. When workers feel safe to report hazards and concerns, everyone benefits.</p>
      
      <h2>Why Psychological Safety Matters</h2>
      <p>When workers feel psychologically safe, they are more likely to:</p>
      <ul>
        <li>Report near-misses and hazards</li>
        <li>Speak up about safety concerns</li>
        <li>Ask questions when uncertain</li>
        <li>Admit mistakes without fear</li>
        <li>Suggest safety improvements</li>
      </ul>
      
      <h2>Building Psychological Safety</h2>
      <p>Leaders can foster psychological safety by:</p>
      <ul>
        <li>Responding positively to concerns</li>
        <li>Modeling humble inquiry</li>
        <li>Celebrating learning from mistakes</li>
        <li>Creating anonymous reporting options</li>
        <li>Regularly seeking worker input</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Psychological safety is not just a "nice to have"—it's essential for preventing incidents. When workers feel safe to speak up, you identify hazards earlier and create a more engaged, safety-conscious workforce.</p>
    `
  },
  {
    slug: "emergency-response-planning-beyond-basics",
    title: "Emergency Response Planning: Beyond the Basics",
    category: "Emergency Response",
    description: "Learn how to develop and test comprehensive emergency response procedures for your workplace.",
    content: `
      <h2>Introduction</h2>
      <p>Effective emergency response planning goes beyond having evacuation routes posted. A comprehensive plan addresses various emergency scenarios and ensures all workers know their roles when seconds count.</p>
      
      <h2>Elements of a Comprehensive Plan</h2>
      <ul>
        <li><strong>Hazard Assessment:</strong> Identify potential emergencies specific to your workplace</li>
        <li><strong>Communication Systems:</strong> Multiple ways to alert workers</li>
        <li><strong>Evacuation Procedures:</strong> Clear routes, assembly points, and accountability</li>
        <li><strong>Emergency Contacts:</strong> Internal and external contact information</li>
        <li><strong>Training Requirements:</strong> Regular drills and refresher training</li>
      </ul>
      
      <h2>Testing Your Plan</h2>
      <p>Regular testing is essential:</p>
      <ul>
        <li>Conduct tabletop exercises quarterly</li>
        <li>Perform full evacuation drills annually</li>
        <li>Test emergency communication systems monthly</li>
        <li>Review and update plans after any incident or near-miss</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>A well-developed and regularly tested emergency response plan can save lives. Invest the time to plan thoroughly, train consistently, and improve continuously based on lessons learned from drills and real events.</p>
    `
  },
  {
    slug: "hazardous-materials-handling-best-practices",
    title: "Hazardous Materials Handling: Best Practices",
    category: "Industry-Specific",
    description: "Best practices for managing hazardous materials safely and compliantly.",
    content: `
      <h2>Introduction</h2>
      <p>Proper handling of hazardous materials is critical for worker safety and regulatory compliance. Understanding the risks and implementing best practices protects both people and the environment.</p>
      
      <h2>Key Best Practices</h2>
      <ul>
        <li><strong>Know the Hazards:</strong> Understand the properties and risks of each material</li>
        <li><strong>Proper Labeling:</strong> Ensure all containers are properly labeled</li>
        <li><strong>SDS Accessibility:</strong> Keep Safety Data Sheets readily available</li>
        <li><strong>Proper Storage:</strong> Store incompatible materials separately</li>
        <li><strong>PPE Selection:</strong> Use appropriate personal protective equipment</li>
        <li><strong>Spill Response:</strong> Have response procedures and supplies ready</li>
      </ul>
      
      <h2>Training Requirements</h2>
      <p>Workers handling hazardous materials must receive:</p>
      <ul>
        <li>Initial training before starting work</li>
        <li>Refresher training annually</li>
        <li>Task-specific training for unique hazards</li>
        <li>Spill response training</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Safe hazardous materials handling requires knowledge, training, and vigilance. By implementing these best practices and maintaining a safety-first attitude, you can minimize risks and ensure compliance with hazardous materials regulations.</p>
    `
  },
  {
    slug: "personal-protective-equipment-guide",
    title: "Personal Protective Equipment: A Complete Guide",
    category: "PPE",
    description: "Everything you need to know about selecting, using, and maintaining personal protective equipment.",
    content: `
      <h2>Introduction</h2>
      <p>Personal Protective Equipment (PPE) is the last line of defense in the hierarchy of controls. When used correctly, PPE protects workers from hazards that cannot be eliminated through engineering or administrative controls.</p>
      
      <h2>Types of PPE</h2>
      <ul>
        <li><strong>Head Protection:</strong> Hard hats protect against falling objects and electrical hazards</li>
        <li><strong>Eye and Face Protection:</strong> Safety glasses, goggles, and face shields</li>
        <li><strong>Hearing Protection:</strong> Earplugs and earmuffs</li>
        <li><strong>Respiratory Protection:</strong> N95 respirators, half-mask, and full-face respirators</li>
        <li><strong>Hand Protection:</strong> Various glove types for different hazards</li>
        <li><strong>Foot Protection:</strong> Safety shoes and boots with protective features</li>
        <li><strong>Fall Protection:</strong> Harnesses, lanyards, and anchor points</li>
      </ul>
      
      <h2>PPE Selection</h2>
      <p>When selecting PPE, consider:</p>
      <ul>
        <li>The specific hazards present in the workplace</li>
        <li>The level of protection required</li>
        <li>Fit and comfort for the worker</li>
        <li>Compatibility with other PPE</li>
        <li>Maintenance and replacement requirements</li>
      </ul>
      
      <h2>Maintenance and Care</h2>
      <p>Proper maintenance extends PPE life and ensures effectiveness:</p>
      <ul>
        <li>Inspect PPE before each use</li>
        <li>Clean according to manufacturer recommendations</li>
        <li>Store properly when not in use</li>
        <li>Replace damaged or worn equipment immediately</li>
        <li>Keep records of inspections and replacements</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>PPE is essential for worker safety, but it should be used as a last resort after other controls. Proper selection, use, and maintenance of PPE protects workers and ensures compliance with safety regulations.</p>
    `
  },
  {
    slug: "conducting-effective-safety-audits",
    title: "Conducting Effective Safety Audits",
    category: "Auditing",
    description: "Learn how to plan and execute safety audits that identify hazards and improve compliance.",
    content: `
      <h2>Introduction</h2>
      <p>Safety audits are systematic evaluations of your workplace safety programs, procedures, and practices. A well-conducted audit identifies hazards, ensures regulatory compliance, and drives continuous improvement.</p>
      
      <h2>Types of Safety Audits</h2>
      <ul>
        <li><strong>Compliance Audits:</strong> Verify adherence to OSHA regulations and standards</li>
        <li><strong>Program Audits:</strong> Evaluate the effectiveness of safety programs</li>
        <li><strong>Worksite Audits:</strong> Identify physical hazards in the workplace</li>
        <li><strong>Behavioral Safety Audits:</strong> Observe worker behaviors and practices</li>
      </ul>
      
      <h2>Planning Your Audit</h2>
      <p>Effective audits require careful planning:</p>
      <ul>
        <li>Define scope and objectives</li>
        <li>Develop checklists based on regulations and best practices</li>
        <li>Schedule at appropriate times (avoid peak production periods)</li>
        <li>Train auditors on observation and documentation</li>
        <li>Notify relevant personnel</li>
      </ul>
      
      <h2>Conducting the Audit</h2>
      <p>During the audit:</p>
      <ul>
        <li>Walk through the entire facility systematically</li>
        <li>Observe work practices and conditions</li>
        <li>Interview workers and supervisors</li>
        <li>Document findings with photos and notes</li>
        <li>Note both hazards and positive safety practices</li>
      </ul>
      
      <h2>Follow-Up and Improvement</h2>
      <p>After the audit:</p>
      <ul>
        <li>Prioritize findings by severity</li>
        <li>Develop corrective action plans</li>
        <li>Assign responsibilities and deadlines</li>
        <li>Track implementation progress</li>
        <li>Verify effectiveness of corrections</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Regular safety audits are essential for maintaining a safe workplace. They identify hazards before incidents occur and demonstrate management commitment to safety. Make audits a cornerstone of your safety management system.</p>
    `
  },
  {
    slug: "workplace-ergonomics-prevention",
    title: "Workplace Ergonomics: Preventing Musculoskeletal Disorders",
    category: "Occupational Health",
    description: "Understand ergonomic principles to prevent injuries and improve employee well-being.",
    content: `
      <h2>Introduction</h2>
      <p>Musculoskeletal disorders (MSDs) are among the most common workplace injuries, affecting millions of workers each year. Ergonomics—the science of fitting jobs to workers—can significantly reduce these injuries.</p>
      
      <h2>Common Ergonomic Risk Factors</h2>
      <ul>
        <li><strong>Repetitive Motions:</strong> Performing the same motions repeatedly</li>
        <li><strong>Forceful Exertions:</strong> Lifting, pushing, or pulling heavy loads</li>
        <li><strong>Awkward Postures:</strong> Working in positions that stress the body</li>
        <li><strong>Static Postures:</strong> Maintaining same position for extended periods</li>
        <li><strong>Vibration:</strong> Exposure to vibrating tools or equipment</li>
        <li><strong>Cold Temperatures:</strong> Working in cold environments</li>
      </ul>
      
      <h2>Ergonomic Solutions</h2>
      <p>Implement these solutions to reduce MSDs:</p>
      <ul>
        <li>Adjust workstation height for proper posture</li>
        <li>Provide ergonomic chairs and supports</li>
        <li>Use lift-assist devices and ergonomic tools</li>
        <li>Implement job rotation to vary tasks</li>
        <li>Allow for rest breaks and stretching</li>
        <li>Train workers on proper lifting techniques</li>
      </ul>
      
      <h2>Early Intervention</h2>
      <p>Watch for warning signs:</p>
      <ul>
        <li>Discomfort or pain during work</li>
        <li>Swelling or numbness</li>
        <li>Reduced range of motion</li>
        <li>Weakness in hands or limbs</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Investing in ergonomics protects workers and improves productivity. A comfortable worker is a more productive worker. Implement ergonomic principles today to prevent costly injuries and improve employee well-being.</p>
    `
  },
  {
    slug: "safety-training-program-development",
    title: "Developing an Effective Safety Training Program",
    category: "Training",
    description: "Create engaging and impactful safety training that resonates with your workforce.",
    content: `
      <h2>Introduction</h2>
      <p>Effective safety training is one of the most important investments a company can make. Well-trained workers are less likely to be injured, more likely to follow safe practices, and better equipped to respond to emergencies.</p>
      
      <h2>Training Program Elements</h2>
      <p>A comprehensive training program includes:</p>
      <ul>
        <li><strong>Orientation Training:</strong> Introduction to company safety policies and procedures</li>
        <li><strong>Job-Specific Training:</strong> Hazards and controls unique to each role</li>
        <li><strong>Refresher Training:</strong> Regular updates to maintain knowledge</li>
        <li><strong>Emergency Response Training:</strong> Procedures for various emergency scenarios</li>
        <li><strong>Supervisor Training:</strong> Skills for managing safety teams</li>
      </ul>
      
      <h2>Designing Effective Training</h2>
      <p>Key principles for impactful training:</p>
      <ul>
        <li>Make it relevant to actual work situations</li>
        <li>Use multiple learning methods (visual, hands-on, discussion)</li>
        <li>Keep sessions interactive and engaging</li>
        <li>Provide opportunities for questions and practice</li>
        <li>Include real examples and case studies</li>
        <li>Test understanding before concluding</li>
      </ul>
      
      <h2>Documentation and Compliance</h2>
      <p>Maintain proper records:</p>
      <ul>
        <li>Attendance records for all training sessions</li>
        <li>Content covered in each session</li>
        <li>Competency assessments</li>
        <li>Certificates or qualifications earned</li>
        <li>Refresher training schedules</li>
      </ul>
      
      <h2>Evaluating Training Effectiveness</h2>
      <p>Measure training success through:</p>
      <ul>
        <li>Knowledge tests and quizzes</li>
        <li>Behavior observations after training</li>
        <li>Incident rate changes</li>
        <li>Worker feedback and suggestions</li>
        <li>Near-miss reporting trends</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Effective safety training saves lives and money. Invest in quality training programs, keep them engaging, and continuously improve based on feedback and results. Your workforce is your most valuable safety asset.</p>
    `
  },
  {
    slug: "contractor-safety-management",
    title: "Contractor Safety Management Best Practices",
    category: "Contractor Safety",
    description: "Ensure contractor safety and compliance with these essential management strategies.",
    content: `
      <h2>Introduction</h2>
      <p>Contractor safety management is a critical aspect of workplace safety that is often overlooked. Contractors may have different safety standards and training than your permanent workforce, making it essential to have robust management practices in place.</p>
      
      <h2>Pre-Qualification Requirements</h2>
      <p>Before hiring contractors, verify:</p>
      <ul>
        <li>Valid licenses and certifications</li>
        <li>Proof of insurance coverage</li>
        <li>Safety performance history</li>
        <li>Employee training records</li>
        <li>OSHA compliance history</li>
        <li>Written safety programs</li>
      </ul>
      
      <h2>Site-Specific Orientation</h2>
      <p>All contractors must receive site-specific training covering:</p>
      <ul>
        <li>Site-specific hazards</li>
        <li>Emergency procedures and evacuation routes</li>
        <li> PPE requirements</li>
        <li>Lockout/tagout procedures</li>
        <li>Traffic and pedestrian patterns</li>
        <li>Reporting requirements for incidents</li>
      </ul>
      
      <h2>Ongoing Monitoring</h2>
      <p>Supervise contractors throughout their work:</p>
      <ul>
        <li>Conduct regular safety inspections</li>
        <li>Verify PPE use</li>
        <li>Monitor work practices</li>
        <li>Check that permits and authorizations are current</li>
        <li>Document any safety concerns</li>
      </ul>
      
      <h2>Communication and Coordination</h2>
      <p>Effective communication includes:</p>
      <ul>
        <li>Regular safety meetings with contractor crews</li>
        <li>Clear escalation procedures for safety issues</li>
        <li>Coordination between multiple contractors</li>
        <li>Sharing of hazard information</li>
        <li>Joint incident investigations</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Contractor safety management requires diligence and proactive oversight. By implementing thorough pre-qualification, orientation, and monitoring processes, you can ensure contractors work safely and protect your entire workforce.</p>
    `
  },
  {
    slug: "incident-investigation-root-cause",
    title: "Incident Investigation: Finding the Root Cause",
    category: "Incident Management",
    description: "Master the art of incident investigation to prevent future occurrences.",
    content: `
      <h2>Introduction</h2>
      <p>Every incident, whether it results in injury or not, provides valuable learning opportunities. Effective incident investigation goes beyond finding fault—it identifies root causes and prevents future occurrences.</p>
      
      <h2>Why Investigate Incidents?</h2>
      <p>Incident investigation helps:</p>
      <ul>
        <li>Identify hidden hazards</li>
        <li>Understand failure points in safety systems</li>
        <li>Prevent similar incidents from occurring</li>
        <li>Comply with regulatory requirements</li>
        <li>Demonstrate commitment to worker safety</li>
        <li>Improve overall safety culture</li>
      </ul>
      
      <h2>The Investigation Process</h2>
      <ol>
        <li><strong>Secure the Scene:</strong> Preserve evidence and prevent further incidents</li>
        <li><strong>Collect Information:</strong> Gather facts from witnesses, records, and physical evidence</li>
        <li><strong>Analyze the Data:</strong> Use techniques like 5-Why or fishbone diagrams</li>
        <li><strong>Identify Root Causes:</strong> Look beyond the immediate cause to underlying factors</li>
        <li><strong>Develop Corrective Actions:</strong> Create specific, measurable actions to prevent recurrence</li>
        <li><strong>Implement and Monitor:</strong> Execute changes and track their effectiveness</li>
      </ol>
      
      <h2>Root Cause Analysis Techniques</h2>
      <p>Several tools can help identify root causes:</p>
      <ul>
        <li><strong>The 5-Why Technique:</strong> Ask "why" repeatedly until you find the root cause</li>
        <li><strong>Fishbone Diagram:</strong> Organize potential causes by category</li>
        <li><strong>Fault Tree Analysis:</strong> Map pathways that led to the incident</li>
        <li><strong>Timeline Analysis:</strong> Create a detailed sequence of events</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Incident investigation is not about blame—it's about learning and prevention. A thorough investigation identifies the systemic issues that allowed an incident to occur and prevents similar incidents in the future. Make investigation a cornerstone of your safety management system.</p>
    `
  }
];

function ArticlePage() {
  const { slug } = useParams();
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="article-page">
        <div className="article-not-found">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/safety-insights" className="back-link">← Back to Safety Insights</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="article-page">
      <div className="article-container">
        <Link to="/safety-insights" className="back-link">← Back to Safety Insights</Link>
        
        <header className="article-header">
          <span className="article-category">{article.category}</span>
          <h1>{article.title}</h1>
          <p className="article-description">{article.description}</p>
        </header>
        
        <div 
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        <div className="article-footer">
          <Link to="/safety-insights" className="back-to-insights">
            ← Back to All Safety Insights
          </Link>
        </div>
      </div>
    </div>
  );
  }
  
export default ArticlePage;
