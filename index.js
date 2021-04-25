function showHi()
{
let name = prompt('Как твое имя?','прекрасная незнакомка');
if (name=="" || name===null)
{ alert(`Привет, решившая остаться неизвестной!`);} 
else {
alert(`Привет, ${name}!`)} 
}