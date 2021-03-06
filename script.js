const getSectionTimes = () => {
    // gets each section of the dashboard page
    const sections = document.querySelectorAll('.section--section--CIk7q');

    sections.forEach((div, index) => {
        // time variables
        var hours = 0;
        var mins = 0;
        var seconds = 0;

        // get title of section
        const title = div.querySelector('h3').innerHTML;

        // get nodelist of spans containing the time of each video
        const time = div.querySelectorAll('ul .curriculum-item--duration--1OEOp');

        // for each item of time in the nodelist
        time.forEach((text) => {
                var timeSplit = text.innerHTML.split(':');
                if (timeSplit[0]) {
                    mins += parseInt(timeSplit[0]);
                    seconds += parseInt(timeSplit[1]);
                }
        });

        // check if seconds can be turned into minutes
        if (seconds >= 60) {
            mins += Math.floor(seconds/60);
            seconds = seconds % 60;
        }

        // check if minutes can be converted to hours
        if (mins >= 60) {
            hours += Math.floor(mins/60);
            mins = mins%60;
        }

        console.log(`Section ${index+1} | ${title}\nRuntime: ${hours}hr(s) ${mins} min(s) ${seconds} seconds.`);
    });

};
getSectionTimes();