let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray) {
    let block = document.createElement("div");
    block.classList.add('course-block');

    let title = document.createElement("div");
    title.innerText = `title: ${course.title}`;
    title.classList.add('title');

    let information = document.createElement("div");
    information.classList.add('information');

    let monthDuration = document.createElement("div");
    monthDuration.innerText = `month: ${course.monthDuration}`;
    monthDuration.classList.add('monthDuration');

    let hourDuration = document.createElement("div");
    hourDuration.innerText = `hour: ${course.hourDuration}`;
    hourDuration.classList.add('hourDuration');

    information.append(monthDuration, hourDuration);

    let modulesBlock = document.createElement("ul");
    modulesBlock.classList.add('modules');
    for (const module of course.modules) {
        let li = document.createElement("li");
        li.innerText = `module: ${module}`;
        modulesBlock.append(li);
    }

    block.append(title, information, modulesBlock);
    document.body.appendChild(block);
}



