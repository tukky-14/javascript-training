const pathList = [
    './01_変数/practice.js',
    './02_条件式と演算子/practice.js',
    './03_オブジェクト/practice.js',
    './04_配列/practice.js',
    './05_繰り返し処理/practice.js',
    './06_関数/practice.js',
    './07_非同期処理/practice.js',
    './08_イベント/practice.html',
    './09_フォーム/practice.html',
];

for (const path of pathList) {
    const div = document.createElement('div');
    const link = document.createElement('a');
    link.textContent = path;
    link.href = path;
    div.appendChild(link);
    document.body.appendChild(div);
}
