
function azim_apply() {
    var eng = document.querySelector('#hheng');
    var sci = document.querySelector('#hsc');
    var is = document.querySelector('#his');
    var clicks = new Array();
    clicks[0] = eng;
    clicks[1] = sci;
    clicks[2] = is;

    document.getElementById('eng1').setAttribute('style', 'display:block;');
    eng.setAttribute('style', 'background-color: white;');

    for (var i = 0; i < clicks.length; i++) {
        clicks[i].onclick = function () {
            for (var i = 0; i < clicks.length; i++) {
                clicks[i].setAttribute('style', 'background-color:  lightcoral;;');
            }
            this.setAttribute('style', 'background-color: white;');
        }
    }
    eng.addEventListener('click', function () {
        document.querySelector('#eng1').setAttribute('style', 'display: block;');
        document.querySelector('#sc1').setAttribute('style', 'display: none;');
        document.querySelector('#isc1').setAttribute('style', 'display: none;');
    });
    sci.addEventListener('click', function () {
        document.querySelector('#eng1').setAttribute('style', 'display: none;');
        document.querySelector('#sc1').setAttribute('style', 'display: block;');
        document.querySelector('#isc1').setAttribute('style', 'display: none;');
    });
    is.addEventListener('click', function () {
        document.querySelector('#eng1').setAttribute('style', 'display: none;');
        document.querySelector('#sc1').setAttribute('style', 'display: none;');
        document.querySelector('#isc1').setAttribute('style', 'display: block;');
    });

    var col = [];
    var maj = [];

    function addValidationListener(inputId, buttonId) {
        var get_rank = document.getElementById(inputId);
        var chk = document.getElementById(buttonId);

        chk.addEventListener('click', function (event) {
            event.preventDefault();
            let rank_input = get_rank.value.trim();
            let isEmpty = !rank_input;

            if (isEmpty) {
                alert("Please enter the rank of chosen major.");
                return;
            }

            let rank = parseInt(rank_input);
            if (rank < 1 || rank > 10) {
                alert("Please enter a valid rank of chosen major between 1 and 10. ");
                return;
            }

            for (var a = 0; a < rank_input.length; a++) {
                if (isNaN(rank_input[a])) {
                    alert("Please enter the rank of chosen major.");
                    return;
                }
            }

            var words;
            if (rank === 1) {
                words = 'st';
            } else if (rank === 2) {
                words = 'nd';
            } else if (rank === 3) {
                words = 'rd';
            } else {
                words = 'th';
            }
            var majors = {
                'cs': 'BSc in Computer Science and Technology',
                'ei': 'BEng in Electronic Information',
                'mse': 'BEng in Materials Science and Engineering',
                'mc': 'BEng in Materials and Chemicals',
                'est': 'BSc in Electronic Science and Technology',
                'phy': 'BSc in Physics',
                'chem': 'BSc in Chemistry',
                'bio': 'BSc in Biology',
                'cogs': 'BSc in Cognitive Science',
                'be': 'BEng in Biomedical Engineering',
                'bm': 'BSc in Biomedical and Medicine',
            };

            var colleges = {
                'cs': 'College of Engineering',
                'ei': 'College of Engineering',
                'mse': 'College of Engineering',
                'mc': 'College of Engineering',
                'est': 'College of Engineering',
                'phy': 'College of Science',
                'chem': 'College of Science',
                'bio': 'College of Science',
                'cogs': 'College of Interdisciplinary Studies',
                'be': 'College of Interdisciplinary Studies',
                'bm': 'College of Interdisciplinary Studies',
            };

            var major = majors[inputId];
            var college = colleges[inputId];

            if (maj.includes(major)) {
                alert("You have already chosen this major.")
                return;
            }

            var index = rank - 1;

            if (col[index] || maj[index]) {
                alert("You have already chosen this rank.");
                return;
            }
            col[index] = college;
            maj[index] = major;


            alert("You have chosen " + major + " as your " + rank + words + " chosen major in " + college + " successfully.");

            var td1text = document.getElementById('td1').textContent;
            var td2text = document.getElementById('td2').textContent;
            var td3text = document.getElementById('td3').textContent;
            var td4text = document.getElementById('td4').textContent;
            var td5text = document.getElementById('td5').textContent;
            var td6text = document.getElementById('td6').textContent;
            var td7text = document.getElementById('td7').textContent;
            var td8text = document.getElementById('td8').textContent;
            var td9text = document.getElementById('td9').textContent;
            var td10text = document.getElementById('td10').textContent;

            var my_ranks = [td1text, td2text, td3text, td4text, td5text, td6text, td7text, td8text, td9text, td10text]

            for (var i = 0; i < 10; i++) {
                var rankIndex = i;
                if (my_ranks[i] == rank_input) {
                    document.getElementById('col' + (rankIndex + 1)).innerHTML = col[rankIndex];
                    document.getElementById('maj' + (rankIndex + 1)).innerHTML = maj[rankIndex];
                }
            }

            // console.log(col);
            // console.log(maj);

        });

        var number_majors = document.querySelector('#total_number');
        var timee = document.querySelector('#last_time');
        function timeupd() {
            function formatTwoDigits(value) {
                if (value < 10) {
                    return '0' + value;
                } else {
                    return value;
                }
            }
            var today = new Date();
            var year = today.getFullYear();
            var mont = today.getMonth();
            var month = mont + 1;
            var date = today.getDate();
            var hour = formatTwoDigits(today.getHours());
            var min = formatTwoDigits(today.getMinutes());
            var sec = formatTwoDigits(today.getSeconds());
            var formattedDate = year + '/' + month + '/' + date + ' ' + hour + ':' + min + ':' + sec;
            return formattedDate;
        }

        var my_set = new Set();
        chk.addEventListener('click', function updateTable() {
            for (var i = 0; i < maj.length; i++) {
                if (maj[i] != null) {
                    my_set.add(maj[i]);
                    let timeups = timeupd();
                    timee.innerHTML = timeups;
                    number_majors.innerHTML = +my_set.size;
                }
            }
            // console.log(my_set);

        });
        var submit_clear = document.querySelector('#alert2');
        var sub = document.getElementById('sub1');
        sub.addEventListener('click', function (event) {
            event.preventDefault();
            let timeups = timeupd();
            timee.innerHTML = timeups;
            var rank_array = [];

            if (maj.length == 0) {
                submit_clear.setAttribute("style", "color: red; text-align: center;");
                submit_clear.innerHTML = "You have not chosen any major.";
            } else {
                var hasNull = false;

                for (var i = 0; i < maj.length; i++) {
                    if (maj[i] == null) {
                        hasNull = true;
                        var words;
                        var rank = i + 1;
                        if (rank === 1) {
                            words = 'st';
                        } else if (rank === 2) {
                            words = 'nd';
                        } else if (rank === 3) {
                            words = 'rd';
                        } else {
                            words = 'th';
                        }
                        var rankk = rank + words + " chosen major";
                        if (rank_array.length == 0) {
                            rank_array.push(rankk + ',');
                        } else {
                            rank_array.push(' and ' + rankk + ',');
                        }
                    }
                }

                if (hasNull) {
                    submit_clear.setAttribute("style", "color: red; text-align: center;");
                    submit_clear.innerHTML = "You have not chosen your " + rank_array.join('') + " you cannot leave any gap between your chosen majors.";
                } else {
                    submit_clear.setAttribute("style", "color: green; text-align: center; font-size: 25px;");
                    submit_clear.innerHTML = "You have successfully submitted your application at time " + timeups;
                }
            }
        });

        var cler = document.getElementById('clearit');
        cler.addEventListener('click', function (event) {
            event.preventDefault();
            for (var i = 0; i < 10; i++) {
                document.getElementById('col' + (i + 1)).innerHTML = '';
                document.getElementById('maj' + (i + 1)).innerHTML = '';
                maj = [];
                col = [];
            }
            number_majors.innerHTML = 0;
            let timeups = timeupd();
            timee.innerHTML = timeups;
            submit_clear.innerHTML = "";
            my_set.clear();
        });
    }

    addValidationListener('cs', 'btn2');
    addValidationListener('ei', 'btn3');
    addValidationListener('mse', 'btn4');
    addValidationListener('mc', 'btn5');
    addValidationListener('est', 'btn6');
    addValidationListener('phy', 'btn7');
    addValidationListener('chem', 'btn8');
    addValidationListener('bio', 'btn9');
    addValidationListener('cogs', 'btn10');
    addValidationListener('be', 'btn11');
    addValidationListener('bm', 'btn12');
} ``
