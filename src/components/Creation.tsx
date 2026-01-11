'use client';

export default function Creation() {
  return (
    <div>
      <h1>Créer une nouvelle peinture</h1>
      <form>
        <label>
          Nom:
          <input type="text" name="name" />
        </label>
        <label>
          Année:
          <input type="text" name="year" />
        </label>
        <label>
          URL de l&apos;image:
          <select name="image_url" datatype="">
            <option value="tableaux/ok1.jpg">Ok 1</option>
            <option value="tableaux/ok2.jpg">Ok 2</option>
            <option value="tableaux/ok3.jpg">Ok 3</option>
            <option value="tableaux/ok4.jpg">Ok 4</option>
            <option value="tableaux/ok5.jpg">Ok 5</option>
            <option value="tableaux/ok6.jpg">Ok 6</option>
            <option value="tableaux/ok7.jpg">Ok 7</option>
            <option value="tableaux/ok8.jpg">Ok 8</option>
          </select>
        </label>
        <label>
          Mots-clés:
          <input type="text" name="keywords" />
        </label>
        <label>
          Date de création:
          <input type="text" name="created_at" />
        </label>
        <label>
          Description:
          <textarea name="description"></textarea>
        </label>
        <button type="submit">Créer</button>
      </form>
    </div>
  );
}
