import Card from "./components/card";
// import user from "./components/user";

const App = () => {
  const jobs = [
  {
    brandLogo: "data:image/jpeg;base64,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",
    name: "Frontend Developer",
    company: "Google",
    date: "Oct 8, 2026",
    posted: "2 days ago",
    post: "Full Time",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    name: "React Developer",
    company: "Meta",
    date: "Oct 7, 2026",
    posted: "3 days ago",
    post: "Full Time",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "data:image/jpeg;base64,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",
    name: "Software Engineer",
    company: "Amazon",
    date: "Oct 6, 2026",
    posted: "4 days ago",
    post: "Full Time",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$32/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    name: "iOS Developer",
    company: "Apple",
    date: "Oct 5, 2026",
    posted: "5 days ago",
    post: "Full Time",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$48/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgM30vImajR0hGKpvIBs86QDNtcz6eAWwrQIzRNfPUMw&s=10",
    name: "Backend Engineer",
    company: "Microsoft",
    date: "Oct 4, 2026",
    posted: "6 days ago",
    post: "Full Time",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$42/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    name: "UI/UX Designer",
    company: "Netflix",
    date: "Oct 3, 2026",
    posted: "1 week ago",
    post: "Part Time",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    name: "AI/ML Engineer",
    company: "NVIDIA",
    date: "Oct 2, 2026",
    posted: "1 week ago",
    post: "Full Time",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://logolook.net/wp-content/uploads/2022/10/Adobe-Logo-2014.png",
    name: "Frontend Engineer",
    company: "Adobe",
    date: "Oct 1, 2026",
    posted: "1 week ago",
    post: "Full Time",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$34/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg",
    name: "Full Stack Developer",
    company: "Salesforce",
    date: "Sep 30, 2026",
    posted: "8 days ago",
    post: "Full Time",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$40/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://sm.mashable.com/t/mashable_sea/news/u/ubers-new-/ubers-new-logo-is-just-the-word-uber_sf59.2496.jpg",
    name: "Software Developer",
    company: "Uber",
    date: "Sep 29, 2026",
    posted: "9 days ago",
    post: "Full Time",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$36/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg",
    name: "Software Engineer",
    company: "IBM",
    date: "Sep 28, 2026",
    posted: "10 days ago",
    post: "Full Time",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$34/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJael-TmSt7YQhLdo6KiCMA7TG-sLAs3UJF1f71m-FaWHo9hXWK30OMfA&s=10",
    name: "Backend Developer",
    company: "Oracle",
    date: "Sep 27, 2026",
    posted: "11 days ago",
    post: "Full Time",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$42/hour",
    location: "Mumbai, India",
  },
];
  console.log(jobs)
  return (
    <div className="parent">
      {jobs.map(function(elem,idx){
        return <div key = {idx}>
          <Card company = {elem.company} post = {elem.post} brandLogo = {elem.brandLogo} name = {elem.name} date = {elem.date}
                posted = {elem.posted} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location ={elem.location} />
        </div>
      })}

    </div>
  );
};

export default App;