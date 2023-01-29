const results =
    [
        { id: 20850, original_language: "en", original_title: "Ilsa: She Wolf of the SS" },
        { id: 40802, original_language: "en", original_title: "Ilsa: She Wolf of the SS" },
        { id: 75092, original_language: "en", original_title: "Ilsa: She Wolf of the SS" },
        { id: 10000, original_language: "en", original_title: "Ilsa: She Wolf of the SS" },
        { id: 90850, original_language: "en", original_title: "Ilsa: She Wolf of the SS" },
    ]
let final = results.find(result => result.id === this.id)
console.log(final)