exports.seed = async function (knex) {
    await knex("project").del();
    await knex("project").insert([
        {
            title: "SavoryScale",
            description:
                "SavoryScale is a web application to make meal planning and grocery shopping more enjoyable and stree-free. Access recipes, plan meals and create an grocery list on the go. Whether you are in the kitchen, at the grocery store, or at work, build a grocery list based on your tastes. Explore and experiment with different recipes more confidently with quantity adjustments and estimated meal costs.",
            url: "",
            client: "",
            date: "2023 December",
            brief: "Create a solution to aid home cooks in everyday meal planning.",
            concept:
                "One-stop location for all your meal planning needs. Curate a comprehensive list of ingredients, discover, save, and automatically adjust recipes.",
            deliverables: "Frontend and backend web development",
            demographic: "Home cooks and food enthusiasts",
            tech: ["Vite", "React.js", "Sass", "Express.js", "Node.js", "PostgreSQL"],
            github: "https://github.com/ctam62/savoryscale",
            images: ["savoryscale.webp", "savoryscale-responsive.webp"],
        },
        {
            title: "YouWatch",
            description:
                "YouWatch is a user-friendly web application that empowers users to effortlessly discover and explore their favourite movies or TV shows. The platform intelligently recommends the optimal streaming services aligned with their preferences, simplifying the sign-up process for a seamless and personalized viewing experience. This was the winning submission for a hackathon challenge proposed by Roku. Our team consisted of three UX designers team and four software engineers.",
            url: "",
            client: "Roku",
            date: "2023 November",
            brief: "Create a solution to entice viewers to subscribe a new streaming platform.",
            concept: "Empower users to effortlessly discover and explore personalized movies or TV shows.",
            deliverables: "Frontend and backend web development",
            demographic: "Movie and TV show fans, digital entertainment enthusiasts, and streaming providers",
            tech: ["React.js", "Sass", "Express.js", "Node.js", "MySQL"],
            github: "https://github.com/ctam62/industry-2b-server",
            images: ["youwatch.webp", "youwatch-responsive.webp"],
        },
        {
            title: "iSpine",
            description:
                "The iSpine program aims to establish a comprehensive platform for all medical imaging related diagnosis, treatment, population based analysis and more. The program is lead by the Digital Imaging Group (DIG) of London, a group of medical doctors, scientists, and engineers dedicated to improving and advancing digital medical imaging.",
            url: "http://digitalimaginggroup.ca/ispine/",
            client: "Digital Imaging Group of London",
            date: "2018 April",
            brief: "Design a website for the iSpine program focused on project sharing and collaboration.",
            concept: "Spinal medical research portfolio fostering collaboration.",
            deliverables: "Frontend web design and development",
            demographic: "Radiologists, medical imaging scientists, and biomedical engineers",
            tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "JQuery"],
            github: "",
            images: ["ispine.webp"],
        },
        {
            title: "GIF Reveal Rumble",
            description:
                "A single player card matching game using GIF images from the GIPHY API. This was a hackathon project completed in a two person software egineering team.",
            url: "https://ctam62.github.io/gif-reveal-rumble/",
            client: "",
            date: "2023 October",
            brief: "Design and build a frontend web application integrating a third-party API",
            concept: "Simple multi-level card matching game",
            deliverables: "Frontend web design and development; third-party API integration",
            demographic: "GIF enthusiasts",
            tech: ["HTML5", "Sass", "JavaScript"],
            github: "https://github.com/ctam62/gif-reveal-rumble",
            images: ["gifrevealrumble.webp"],
        },
    ]);
};
