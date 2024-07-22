### フォーム

-   JavaScript のフォームは、ユーザーからの入力を収集し、処理するための重要な要素
-   フォームは、ユーザーがデータを入力し、それをサーバーに送信するためのインターフェースを提供する
-   フォームは通常、<form>タグで囲まれ、内部に入力要素（テキストボックス、ラジオボタン、チェックボックスなど）が含まれる

<br/>

### フォームに使用できる`<input>`要素やその他の要素の種類

| **要素の種類** | **説明**                                                                     | **例**                                                                                                              |
| -------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `text`         | 単一行のテキスト入力を受け取るためのフィールド。                             | `<input type="text" id="username" name="username">`                                                                 |
| `password`     | パスワード入力用のフィールド。入力されたテキストは隠される。                 | `<input type="password" id="password" name="password">`                                                             |
| `email`        | 電子メールアドレスを入力するためのフィールド。メールアドレス形式を検証する。 | `<input type="email" id="email" name="email">`                                                                      |
| `number`       | 数値を入力するためのフィールド。数値のみを受け付ける。                       | `<input type="number" id="quantity" name="quantity">`                                                               |
| `date`         | 日付を入力するためのフィールド。カレンダーウィジェットが表示される。         | `<input type="date" id="birthday" name="birthday">`                                                                 |
| `tel`          | 電話番号を入力するためのフィールド。                                         | `<input type="tel" id="phone" name="phone">`                                                                        |
| `url`          | URL を入力するためのフィールド。URL 形式を検証する。                         | `<input type="url" id="website" name="website">`                                                                    |
| `checkbox`     | 複数の選択肢の中から選択できるチェックボックス。                             | `<input type="checkbox" id="subscribe" name="subscribe">`                                                           |
| `radio`        | 複数の選択肢の中から 1 つだけ選択できるラジオボタン。                        | `<input type="radio" id="male" name="gender" value="male">`                                                         |
| `file`         | ファイルを選択するためのフィールド。                                         | `<input type="file" id="avatar" name="avatar">`                                                                     |
| `hidden`       | ユーザーには表示されないが、送信されるデータを保持するためのフィールド。     | `<input type="hidden" id="userid" name="userid" value="12345">`                                                     |
| `color`        | 色を選択するためのフィールド。カラーピッカーが表示される。                   | `<input type="color" id="favcolor" name="favcolor">`                                                                |
| `range`        | 範囲内の数値をスライダーで入力するフィールド。                               | `<input type="range" id="points" name="points" min="0" max="10">`                                                   |
| `submit`       | フォームを送信するためのボタン。                                             | `<input type="submit" value="送信">`                                                                                |
| `reset`        | フォームをリセットするためのボタン。                                         | `<input type="reset" value="リセット">`                                                                             |
| `button`       | JavaScript による任意のアクションを実行するためのボタン。                    | `<input type="button" value="クリックしてね！" onclick="alert('ボタンがクリックされました')">`                      |
| `textarea`     | 複数行のテキスト入力を受け取るためのフィールド。                             | `<textarea id="message" name="message"></textarea>`                                                                 |
| `select`       | ドロップダウンメニューを作成するためのフィールド。                           | `<select id="country" name="country"><option value="jp">日本</option><option value="us">アメリカ</option></select>` |
| `label`        | 入力要素のラベルを定義するための要素。入力要素と関連付けることができる。     | `<label for="username">ユーザー名:</label>`                                                                         |

[ウェブフォームの構成要素](https://developer.mozilla.org/ja/docs/Learn/Forms)
