
<form>
  <input type="text" id="searchInput">
  <button type="button" onclick="search()">Buscar</button>
</form>

<script>
function search() {
  var input = document.getElementById("searchInput").value;
   async function obtenerProductos() {
      try {
        const response = await fetch('https://tienda-falsa.valengalleramos.repl.co/products');
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        return [];
      }
    }
}
</script>
