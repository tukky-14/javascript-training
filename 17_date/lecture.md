## JavaScript の Date オブジェクトと年月日時刻の取得方法

JavaScript の Date オブジェクトを使うと、日付や時刻に関する操作が簡単に行える。以下は Date オブジェクトの基本的な使い方と、年月日時刻の取得方法についてのまとめ。

<br/>

### Date オブジェクトの作成

```javascript
// 現在の日時を取得
const now = new Date();

// 特定の日付を指定して作成（年, 月-1, 日, 時, 分, 秒, ミリ秒）
const specificDate = new Date(2024, 9, 7, 14, 30, 0, 0); // 2024年10月7日 14:30:00
```

<br/>

### 日付と時刻の取得方法

```javascript
const now = new Date();

// 年を取得
const year = now.getFullYear(); // 2024

// 月を取得（0-11の範囲で返される。0が1月、11が12月）
const month = now.getMonth(); // 9 (10月を意味する)

// 日を取得
const day = now.getDate(); // 7

// 曜日を取得（0-6の範囲で返される。0が日曜日、6が土曜日）
const dayOfWeek = now.getDay(); // 1 (月曜日を意味する)

// 時を取得
const hours = now.getHours(); // 14

// 分を取得
const minutes = now.getMinutes(); // 30

// 秒を取得
const seconds = now.getSeconds(); // 0

// ミリ秒を取得
const milliseconds = now.getMilliseconds(); // 0
```

<br/>

### ISO 文字列形式で日時を取得

```javascript
const now = new Date();
const isoString = now.toISOString(); // 例: "2024-10-07T14:30:00.000Z"
```

<br/>

### ローカル日時文字列で取得

```javascript
const now = new Date();
const localString = now.toLocaleString(); // 例: "10/7/2024, 2:30:00 PM"
```

<br/>

### 日時の設定方法

```javascript
const date = new Date();

// 年を設定
date.setFullYear(2025);

// 月を設定（0-11の範囲で指定する）
date.setMonth(11); // 12月

// 日を設定
date.setDate(25);

// 時を設定
date.setHours(10);

// 分を設定
date.setMinutes(15);

// 秒を設定
date.setSeconds(30);

// ミリ秒を設定
date.setMilliseconds(500);
```
