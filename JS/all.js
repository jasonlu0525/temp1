var todolist = document.querySelector('#todolist');
var data_set = [];
// var data_set = JSON.parse(localStorage.getItem('issue')) || [];
var test; //測試 e.target.nextSibling 的error

function create_el(index) {
    var created_list = document.querySelector('#list');
    var show_list = document.createElement('li');
    show_list.classList.add('d-flex', 'justify-content-around', 'text-lg', 'text-center');
    show_list.innerHTML = `<span id="delete" class="text-primary col-6 display-5">刪除</span> <span id="issue" class="col-6 display-5">${index}</span>`;
    created_list.appendChild(show_list);
}
window.addEventListener('load', () => {
    var data_get = JSON.parse(localStorage.getItem('work'));
    data_set = data_get;
    for (var storage = 0; storage < data_set.length; storage++) {
        create_el(data_set[storage]);
    }
}, false);

//處理順序: 資料data(陣列-->loaclstorage)-->介面view

todolist.addEventListener('click', (e) => {
    e.preventDefault();
    var input_value = document.querySelector('#text').value;
    if (e.target.id === "click") {
        if (input_value === '') {
            alert('請輸入文字!!');
        } else {
            data_set.push(input_value);
            localStorage.setItem('work', JSON.stringify(data_set));
            create_el(input_value); //call function create_el()
        }
    } else if (e.target.id === "delete") {
        for (delete_index = 0; delete_index < data_set.length; delete_index++) {
            test = e.target.nextSibling;
            test1 = e.target.nextElementSibling;
            if (data_set[delete_index] === e.target.nextElementSibling.textContent) {
                console.log(data_set[delete_index]);
                data_set.splice(delete_index, 1);
                localStorage.setItem('work', JSON.stringify(data_set));
                e.target.parentNode.remove();
            }
        }
    }
}, false);