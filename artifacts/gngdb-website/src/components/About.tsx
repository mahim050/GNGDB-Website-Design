import { Eye, Target, Globe, Award, ShieldCheck, Users, Leaf, HandHeart } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const stats = [
  { icon: Users, value: "5,000+", label: "Youth Empowered" },
  { icon: Leaf, value: "50+", label: "Projects Completed" },
  { icon: Globe, value: "20+", label: "Communities Reached" },
  { icon: HandHeart, value: "10+", label: "Partner Organizations" },
];

const subsections = [
  {
    title: "Our Vision",
    icon: Eye,
    content: "Gono Netritto Gothon Unnayan Bangladesh envisions a nation where youth are empowered, communities thrive sustainably, and social leadership drives lasting change. We believe every young person deserves the opportunity to actively shape a better Bangladesh — one community at a time.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    title: "Our Mission",
    icon: Target,
    content: "Our mission is to develop capable young leaders, implement community-driven development programs, promote social welfare, and create sustainable environmental initiatives across Bangladesh. We are committed to inclusivity, transparency, and delivering measurable, real-world impact.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    title: "Who We Are",
    icon: ShieldCheck,
    content: "GNGDB — Gono Netritto Gothon Unnayan Bangladesh — is a Government Registered Nonprofit Organization (NPO) dedicated to youth empowerment and community development. Since our founding, we have led diverse initiatives spanning environmental sustainability, social welfare, education, and leadership training — directly benefiting thousands of youth and families across Bangladesh.",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    title: "Impact & Achievements",
    icon: Award,
    content: "",
    achievements: [
      "5,000+ youth engaged in leadership development programs",
      "50+ community and environmental projects successfully completed",
      "20+ communities benefited across Bangladesh",
      "Active collaborations with local NGOs and government agencies",
    ],
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #eff6ff 50%, #fefce8 100%)" }}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <AnimatedSection className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold tracking-wide mb-6">
            <ShieldCheck className="w-4 h-4" />
            Government Registered Nonprofit Organization
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-5 leading-tight">
            About <span className="text-emerald-600">Us</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
            Empowering Youth &amp; Communities Across Bangladesh for a Sustainable Future
          </p>
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="h-1 w-8 rounded-full bg-emerald-300" />
            <div className="h-1 w-16 rounded-full bg-emerald-500" />
            <div className="h-1 w-8 rounded-full bg-emerald-300" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="max-w-4xl mx-auto mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl shadow-emerald-100/50 border border-white text-center">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Gono Netritto Gothon Unnayan Bangladesh (GNGDB)</strong> is a Government Registered Nonprofit Organization founded with a clear purpose — to uplift communities and empower the youth of Bangladesh. We operate transparently under all applicable nonprofit regulations, partnering with local governments, NGOs, and community leaders to drive sustainable, people-centered development across the nation.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <AnimatedSection key={stat.label} delay={idx * 0.08} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg shadow-gray-100/60 border border-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {subsections.map((section, idx) => (
            <AnimatedSection
              key={section.title}
              delay={idx * 0.1}
              className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border ${section.border} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className="flex items-start gap-5">
                <div className={`shrink-0 p-4 rounded-2xl ${section.bg} ${section.color} group-hover:scale-110 transition-transform duration-300`}>
                  <section.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  {section.achievements ? (
                    <ul className="space-y-3">
                      {section.achievements.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-gray-600 text-base leading-relaxed">
                          <span className={`mt-1.5 w-2 h-2 rounded-full ${section.bg.replace("bg-", "bg-").replace("/50", "")} ${section.color.replace("text-", "bg-")} shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 text-base leading-relaxed">{section.content}</p>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
