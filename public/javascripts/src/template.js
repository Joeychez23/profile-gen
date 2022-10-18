

function createTeamHTML(team) {
    
    function setManager(manager) {
        return `
                <div class="testBox">
                    <div class="nameTitle">
                        <div class="nameBox">
                            <h4>${manager.name}</h4>
                        </div>
                        <div class="imgBox">
                            <div id="mImg" class="img"></div><h5 class="jTitle">${manager.role}</h5>
                        </div>
                    </div>
                    <div class="dataBox">
                        <div class="valBox">ID: ${manager.id}</div>
                        <div class="valBox">📧: <a href="mailto:${manager.email}" target="_blank">${manager.email}</a></div>
                        <div class="valBox">Offices: ${manager.offices}</div>
                    </div>
                </div>
    `  
    }
    
    
    
    
    
    function setEngineer(engineer) {
        return `
                <div class="testBox">
                    <div class="nameTitle">
                        <div class="nameBox">
                            <h4>${engineer.name}</h4>
                        </div>
                        <div class="imgBox">
                            <div id="eImg" class="img"></div><h5 class="jTitle">${engineer.role}</h5>
                        </div>
                    </div>
                    <div class="dataBox">
                        <div class="valBox">ID: ${engineer.id}</div>
                        <div class="valBox">📧: <a href="mailto:${engineer.email}" target="_blank">${engineer.email}</a></div>
                        <div class="valBox">Git: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></div>
                    </div>
                </div>
    `  
    }
    
    
    
    
    
    
    
    
    
    function setIntern(intern) {
        return `
                <div class="testBox">
                    <div class="nameTitle">
                        <div class="nameBox">
                            <h4>${intern.name}</h4>
                        </div>
                        <div class="imgBox">
                            <div id="iImg" class="img"></div><h5 class="jTitle">${intern.role}</h5>
                        </div>
                    </div>
                    <div class="dataBox">
                        <div class="valBox">ID: ${intern.id}</div>
                        <div class="valBox">📧: <a href="mailto:${intern.email}" target="_blank">${intern.email}</a></div>
                        <div class="valBox">🎓: ${intern.school}</div>
                    </div>
                </div>
    `  
    };


    const html = new Array;

    const managers = team.filter( currTeam => currTeam.getRole() === "Manager")
    const manHTML = managers.map(manager => setManager(manager));
    html.push(manHTML);

    const engineers = team.filter( currTeam => currTeam.getRole() === "Engineer")
    const engHTML = engineers.map(engineer => setEngineer(engineer));
    html.push(engHTML);

    const interns = team.filter( currTeam => currTeam.getRole() === "Intern")
    const intHTML = interns.map(intern => setIntern(intern));
    html.push(intHTML);


    return html.join("");

}


module.exports = function(team) {
        return `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content=" IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Basic</title>
        <!--jquery CDN-->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <!--jquery code-->
        <script>
            $(document).ready(function() {});
        </script>
        <!--stylesheet link-->
        <link href= "./public/stylesheets/resetstylesheet.css" type= "text/css" rel= "stylesheet">
        <link href= "./public/stylesheets/style.css" type= "text/css" rel= "stylesheet">
        <!--bootstrap CDN-->
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <!-- JavaScript Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    </head>
    <body>
        <header>
            <h2>My Team</h2>
        </header>
        <div id="content" class= "container-fluid">
            <div id="teamBox" class= "container-fluid">
            ${createTeamHTML(team)}
            </div>
        </div>
    </body>
    <!--JavaScript link-->
    <script src="index.js"></script>
</html>
    `
}