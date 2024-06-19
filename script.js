const fortunes = [
    "오늘은 좋은 일이 생길 거예요!",
    "행운의 여신이 당신을 기다리고 있어요.",
    "긍정적인 에너지를 유지하세요!",
    "당신의 노력이 결실을 맺을 거예요.",
    "뜻하지 않은 기회가 찾아올 거예요.",
    "죽으세요 ^^"
];

function getFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[randomIndex];
    const fortuneText = document.getElementById('fortune-text');
    fortuneText.textContent = fortune;
}
