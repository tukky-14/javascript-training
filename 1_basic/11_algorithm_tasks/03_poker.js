// ### トランプのカード
// 1. 以下のようなトランプのカードを表すオブジェクト配列があります
// 3. スート suit は、'♠', '♣', '♥', '♦' のいずれかです
// 4. ランク rank は、'A', '2', '3', ..., '10', 'J', 'Q', 'K' のいずれかです
// 5. トランプのカードは、スートとランクの組み合わせで表されます
// ポーカーの役を判定する関数 poker を実装してください

const suits = ['♠', '♣', '♥', '♦'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const cards = suits.flatMap((suit) => ranks.map((rank) => ({ suit, rank })));

// ランダムな手札を生成
const hand = [];
for (let i = 0; i < 5; i++) {
    hand.push(cards[Math.floor(Math.random() * cards.length)]);
}

const poker = (hand) => {
    const isFlush = hand.every((card, i, hand) => card.suit === hand[0].suit);
    const isStraight = hand.every((card, i, hand) => card.rank === ranks[i]);
    const isStraightFlush = isFlush && isStraight;
    const isFourOfAKind = ranks.some((rank) => hand.filter((card) => card.rank === rank).length === 4);
    const isFullHouse =
        ranks.some((rank) => hand.filter((card) => card.rank === rank).length === 3) &&
        ranks.some((rank) => hand.filter((card) => card.rank === rank).length === 2);
    const isThreeOfAKind = ranks.some((rank) => hand.filter((card) => card.rank === rank).length === 3);
    const isTwoPair = ranks.filter((rank) => hand.filter((card) => card.rank === rank).length === 2).length === 2;
    const isOnePair = ranks.some((rank) => hand.filter((card) => card.rank === rank).length === 2);
    if (isStraightFlush) return 'ストレートフラッシュ';
    if (isFourOfAKind) return 'フォーカード';
    if (isFullHouse) return 'フルハウス';
    if (isFlush) return 'フラッシュ';
    if (isStraight) return 'ストレート';
    if (isThreeOfAKind) return 'スリーカード';
    if (isTwoPair) return 'ツーペア';
    if (isOnePair) return 'ワンペア';
    return 'ハイカード';
};

console.log(hand);
console.log(poker(hand));
