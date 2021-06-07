import {Picture} from './Picture'; 
export class Gal{
 
   private mass: Picture[]=[
      {description:"Постоянство памяти картина Сальвадора Дали. Год написания: 1931, размер: 33 см. х 24 см",
      image:"./assets/images/img1.jpg"},
      {description:"Oдна из наиболее известных картин нидерландского художника-постимпрессиониста Винсента Ван Гога. Представляет вид из восточного окна спальни Ван Гога в Сен-Реми-де-Прованс на предрассветное небо и вымышленную деревню",
       image:"./assets/images/img2.jpg"}];
   // private info: string[] = ["Постоянство памяти картина Сальвадора Дали. Год написания: 1931, размер: 33 см. х 24 см", "Oдна из наиболее известных картин нидерландского художника-постимпрессиониста Винсента Ван Гога. Представляет вид из восточного окна спальни Ван Гога в Сен-Реми-де-Прованс на предрассветное небо и вымышленную деревню. Картина написана в июне 1889 года; с 1941 года хранится в Музее современного искусства в Нью-Йорке.","Портре́т госпожи́ Ли́зы дель Джоко́ндо», итал. Ritratto di Monna Lisa del Giocondo) — картина Леонардо да Винчи, одно из самых известных произведений живописи. Точная дата написания неизвестна (по некоторым сведениям, написана между 1503 и 1505 годами). Ныне хранится в Лувре. Считается, что на картине изображена Лиза Герардини, супруга флорентийского торговца шёлком Франческо дель Джокондо."];
   // private  adress: string[]=["./assets/images/img1.jpg","./assets/images/img2.jpg","./assets/images/img3.jpg"]
  
get():Picture[] {
   return this.mass;
}


  
add(name: Picture){
          
   this.mass.push(name);
}

}
