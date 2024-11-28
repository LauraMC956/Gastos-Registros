document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expenseForm");
  let gastosGuardados = JSON.parse(localStorage.getItem("expenses")) || [];

  
  actualizarTabla();
  actualizarGrafico();

  // Event listener para el formulario
  expenseForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const amount = parseFloat(document.getElementById("amount").value);
      const date = document.getElementById("date").value;
      const category = document.getElementById("category").value;

      if (!amount || !date || !category) return; 

      const expenseData = {
          amount: amount,
          date: date,
          category: category
      };

      // Agregar el nuevo gasto al array de registros
      gastosGuardados.push(expenseData);

      // Guardar los gastos actualizados en el localStorage
      localStorage.setItem("expenses", JSON.stringify(gastosGuardados));

      // Limpiar el formulario
      expenseForm.reset();
      alert("Gasto registrado exitosamente en el almacenamiento local.");

      
      actualizarTabla();
      actualizarGrafico();
  });

  function actualizarTabla() {
      const tablaCuerpo = document.getElementById('tabla-cuerpo');
      tablaCuerpo.innerHTML = '';
      gastosGuardados.forEach(gasto => {
          let fila = `
              <tr>
                  <td>${gasto.date}</td>
                  <td>${gasto.category}</td>
                  <td>${gasto.amount}</td>
              </tr>
          `;
          tablaCuerpo.innerHTML += fila;
      });
  }

  function actualizarGrafico() {
      const ctx = document.getElementById('gastos-chart').getContext('2d');
      const categorias = gastosGuardados.map(gasto => gasto.category);
      const montos = gastosGuardados.map(gasto => gasto.amount);

      
      if (window.gastosChart) window.gastosChart.destroy();

      window.gastosChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: categorias,
              datasets: [{
                  label: 'Monto de Gastos',
                  data: montos,
                  backgroundColor: 'rgba(54, 162, 235, 0.2)',
                  borderColor: 'rgba(54, 162, 235, 1)',
                  borderWidth: 1
              }]
          },
          options: {
              responsive: true,
              scales: {
                  y: { beginAtZero: true }
              }
          }
      });
  }
});






