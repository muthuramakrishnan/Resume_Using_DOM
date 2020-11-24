let container = document.createElement('div');container.setAttribute('class','container');
let main = document.createElement('main');
let section = document.createElement('section');

/*section 1 CODE*/
    let section1 = document.createElement('div');section1.setAttribute('class','section1');
    let card = document.createElement('div');card.setAttribute('class','card');
    let i = document.createElement('i');i.setAttribute('class','fas fa-user');
    let h3 = document.createElement('h3');h3.innerText = 'Profile';
    let p = document.createElement('p');p.setAttribute('class','para');
    p.innerText = 'To work in an environment where I can utilize and apply my knowledge, skills which would enable me to grow while fulfilling organizational goals.';
    card.append(i,h3,p);
    section1.append(card);

    card = document.createElement('div');card.setAttribute('class','card');
    i = document.createElement('i');i.setAttribute('class','fas fa-flask');
    h3 = document.createElement('h3');h3.innerText = 'Skills';
    let ul = document.createElement('ul');
    let li = document.createElement('li');li.setAttribute('class','list java'); li.innerText = 'Core Java';
    ul.append(li);
    li = document.createElement('li');li.setAttribute('class','list html'); li.innerText = 'HTML';
    ul.append(li);
    li = document.createElement('li');li.setAttribute('class','list css'); li.innerText = 'CSS';
    ul.append(li);
    li = document.createElement('li');li.setAttribute('class','list js'); li.innerText = 'JavaScript';
    ul.append(li);
    card.append(i,h3,ul);
    section1.append(card);


    card = document.createElement('div');card.setAttribute('class','card');
    i = document.createElement('i');i.setAttribute('class','fas fa-briefcase');
    h3 = document.createElement('h3');h3.innerText = 'Work Experience';
    let br = document.createElement('br');
    let h4 = document.createElement('h4');h4.innerText = 'Associate Consultant';
    p = document.createElement('p'); p.setAttribute('class','date');p.innerText='05/2018 - 09/2020';
    let clear = document.createElement('div'); clear.setAttribute('style','clear: both;');
    ul = document.createElement('ul');ul.setAttribute('class','expUL');
    li = document.createElement('li');li.innerText = 'Experienced in RCA and S/W Development';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Excellent knowledge in Java, Spring, Json & MySQL';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Good Experience in RCA / Triaging. As a part of triaging, worked on the LIVE bugs raised across various Products and narrowed down to the exact root cause. Hence having great debugging skills';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Determined quick learner with strong interpersonal skills and proven ability to manage positive and productive client relationship';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Decisive problem solver able to execute innovative solutions and process improvements to meet defined business goals';
    ul.append(li);
    card.append(i,h3,br,h4,p,clear,ul);
    section1.append(card);

/*section 2 CODE*/
    let section2 = document.createElement('div');section2.setAttribute('class','section2');
    card = document.createElement('div');card.setAttribute('class','card');
    i = document.createElement('i');i.setAttribute('class','fas fa-briefcase');
    h3 = document.createElement('h3');h3.innerText = 'Work Experience';
    br = document.createElement('br');
    h4 = document.createElement('h4');h4.innerText = 'Associate Consultant';
    p = document.createElement('p'); p.setAttribute('class','date');p.innerText='05/2018 - 09/2020';
    clear = document.createElement('div'); clear.setAttribute('style','clear: both;');
    ul = document.createElement('ul');ul.setAttribute('class','expUL');
    li = document.createElement('li');li.innerText = 'Identifying incidents to root cause against the bugs raised against various PayPal Branded, Unbranded and Billing Products';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Debugging applications and implementing code fixes when necessary';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Good Experience in RCA / Triaging. As a part of triaging, worked on the LIVE bugs raised across various Products and narrowed down to the exact root cause. Hence having great debugging skills';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Proactively track dependencies and drive dependent teams for timely delivery';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Addressing queries raised by the reporters related to Branded and Unbranded Checkout as a part of live support';
    ul.append(li);
    card.append(i,h3,br,h4,p,clear,ul);
    section2.append(card);


    card = document.createElement('div');card.setAttribute('class','card');
    i = document.createElement('i');i.setAttribute('class','fas fa-flask');
    h3 = document.createElement('h3');h3.innerText = 'Skills';
    ul = document.createElement('ul');ul.setAttribute('class','expUL');
    li = document.createElement('li');li.innerText = 'Received AGILE Values ADAPTIVE award - For adapting to everyday challenges and delivering exemplary service (Quarter 2 2019)';
    ul.append(li);
    li = document.createElement('li');li.innerText = 'Received AGILE Values GLOBAL award - For delivering innovative and global solutions, everyday (Quarter 4 2019)';
    ul.append(li);
    card.append(i,h3,ul);
    section2.append(card);


    card = document.createElement('div');card.setAttribute('class','card');
    i = document.createElement('i');i.setAttribute('class','fas fa-graduation-cap');
    h3 = document.createElement('h3');h3.innerText = 'Education';
    let eduTable = document.createElement('div');eduTable.setAttribute('class','eduTable');
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.innerText = 'Qualification';
    tr.append(th);
    th = document.createElement('th');
    th.innerText = 'Year';
    tr.append(th);
    th = document.createElement('th');
    th.innerText = 'University';
    tr.append(th);
    th = document.createElement('th');
    th.innerText = 'Percent';
    tr.append(th);
    tbody.append(tr);

    tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerText = 'B. Tech IT';
    tr.append(td);
    td = document.createElement('td');
    td.innerText = '2018';
    tr.append(td);
    td = document.createElement('td');
    td.innerText = 'Anna University';
    tr.append(td);
    td = document.createElement('td');
    td.innerText = '71.20';
    tr.append(td);
    tbody.append(tr);

    tr = document.createElement('tr');
    td = document.createElement('td');
    td.innerText = 'XII';
    tr.append(td);
    td = document.createElement('td');
    td.innerText = '2014';
    tr.append(td);
    td = document.createElement('td');
    td.innerText = 'TN STATE BOARD';
    tr.append(td);
    td = document.createElement('td');
    td.innerText = '83.08';
    tr.append(td);
    tbody.append(tr);

    tr = document.createElement('tr');
    td = document.createElement('td');
    td.innerText = 'X';
    tr.append(td);
    td = document.createElement('td');
    td.innerText = '2014';
    tr.append(td);
    td = document.createElement('td');
    td.innerText = 'TN STATE BOARD';
    tr.append(td);
    td = document.createElement('td');
    td.innerText = '86.60';
    tr.append(td);
    tbody.append(tr);
    table.append(tbody);
    eduTable.append(table);
    card.append(i,h3,br,br,eduTable);
    section2.append(card);


/*header*/
    let header = document.createElement('header');
    let header1 = document.createElement('div'); header1.setAttribute('class','header1');
    let img = document.createElement('img'); 
    img.setAttribute('src','cover_img.jpeg');
    img.setAttribute('alt','Profile Picture');
    img.setAttribute('class','logo');
    img.setAttribute('width','192px');
    img.setAttribute('height','200px');
    header1.append(img);

    let header2 = document.createElement('div'); header2.setAttribute('class','header2');
    let h2 = document.createElement('h2'); h2.innerText = 'MUTHURAMAKRISHNAN.M';
    header2.append(h2);

    let header3 = document.createElement('div'); header3.setAttribute('class','header3');

    let header4 = document.createElement('div'); header4.setAttribute('class','header4');
    p = document.createElement('p');p.innerText = 'Passionate Programmer | Web Developer -  mrk.kcg@gmail.com';
    header4.append(p);
    header.append(header1,header2,header3,header4);

    
section.append(section1, section2);
main.append(section);
container.append(header, main);
document.body.append(container);
