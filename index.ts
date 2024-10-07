/*
 * 単一責任の原則
 * クラスが1つの機能や責任を持つ
 * クラスが変更される理由は1つ
*/

/* 遵守している例 
 * 機能：鳥の種類（species）と名前の管理
*/
class Bird {
  private species: string;
  private name: string;

  constructor(species: string, name: string) {
    this.species = species;
    this.name = name;
  }

  setSpecies(species: string) {
    this.species = species;
  }

  setName(name: string) {
    this.name = name;
  }

  getSpecies(): string {
    return this.species;
  }

  getName(): string {
    return this.name;
  }
}

// インスタンスの生成 → 種類と名前をプロパティにセット
const bird = new Bird("Sparrow", "Jack")
console.log(bird)

// メソッドでプロパティの値を変更 
bird.setSpecies("Eagle"); 
bird.setName("Sam"); 
console.log(bird); 

// 外部からクラス内のプロパティを読み取る
console.log(bird.getSpecies()); 
console.log(bird.getName()); 

/* 違反している例
 * 機能：鳥の基本情報を管理、鳥を観察する
*/

class Bird2 {
  private species: string;
  private name: string;

  constructor(species: string, name: string) {
    this.species = species;
    this.name = name;
  }

  setSpecies(species: string) {
    this.species = species;
  }

  setName(name: string) {
    this.name = name;
  }

  getSpecies(): string {
    return this.species;
  }

  getName(): string {
    return this.name;
  }

  birdWatch(): void {
    // 鳥の観察記録を管理するロジック
    console.log(
      `Observing and recording the behavior of ${this.name}the ${this.species}`
    );
  }
}