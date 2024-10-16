import sql from 'better-sqlite3'

const db = sql('meals.db');

export async function getMeals(){
  await new Promise((resolve) => setTimeout(resolve,1000))
  // throw new Error("Meals Error")
  return db.prepare("SELECT * FROM meals").all(); // all은 fetching run은 insert할때 get은 한열만 받고싶을때
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}