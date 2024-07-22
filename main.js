const pathList = [
    { title: '01_変数', link: './1_basic/01_variables/practice.js' },
    { title: '02_条件式と演算子', link: './1_basic/02_operator/practice.js' },
    { title: '03_オブジェクト', link: './1_basic/03_object/practice.js' },
    { title: '04_配列', link: './1_basic/04_array/practice.js' },
    { title: '05_繰り返し処理', link: './1_basic/05_loop/practice.js' },
    { title: '06_関数', link: './1_basic/06_function/practice.js' },
    { title: '07_非同期処理', link: './1_basic/07_asynchronous/practice.js' },
    { title: '08_イベント', link: './1_basic/08_event/practice.html' },
    { title: '09_フォーム', link: './1_basic/09_form/practice.html' },
    { title: '10_API通信', link: './1_basic/10_api/practice.html' },
];

for (const path of pathList) {
    const div = document.createElement('div');
    const link = document.createElement('a');
    link.textContent = path.title;
    link.href = path.link;
    div.appendChild(link);
    document.body.appendChild(div);
}
