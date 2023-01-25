var Answers = ["A", "C", "B"]
    Tot = Answers.Length;
function GetCheckedValue(RadioName) {
    var Radios = document.GetElementsByName(RadioName);
    for (var Y = 0; Y < Radios.Length; Y++)
        if (Radios[Y].Checked) return Radios[Y].Value;
}
function GetScore() {
    var Score = 0;
    for (var I = 0; I < Tot; I++)
        if (GetCheckedValue("Question" + I) === Answers[I]) Score += 1;
    return Score;
}
function ReturnScore() {
    document.getElementById('Myresults').InnerHTML = "Your Score Is " + GetScore() + "/" + Tot;

}