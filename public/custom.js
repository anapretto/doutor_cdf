    // ativar o collapse
    function ativarCollapse() {
        $('#collapseExample').collapse('show');
    }

    // "Enter" no campo de busca
    document.getElementById('busca').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            ativarCollapse();
        }
    });

    //  clique no botão de busca
    document.getElementById('pesquisar').addEventListener('click', function() {
        ativarCollapse();
    });


    $(document).ready(function() {
        const searchInput = $("#busca");
        const searchButton = $("#pesquisar");
        const searchResults = $("#searchResults");
    
        searchButton.on("click", performSearch);
        searchInput.on("keydown", function(event) {
            if (event.key === "Enter") {
                performSearch();
            }
        });
    
        function performSearch() {
            const searchTerm = searchInput.val().trim();
            let result = "";
    
            switch (searchTerm) {
                case "P0485":
                    result = "P0485: Falha no Circuito Elétrico do Eletroventilador do Radiador (Fan Power/Ground Circuit).";
                    break;
                case "P0340":
                    result = "P0340: Falha no Circuito Elétrico do Sensor 'A' de Fase do Motor (CMP) do Banco 1 (Camshaft Position Sensor 'A' Circuit Bank 1 or Single Sensor).";
                    break;
                case "P0562":
                    result = "P0562: Tensão baixa da bateria gravado na memória da UCE.";
                    break;
                default:
                    result = "Nenhum resultado encontrado para a busca.";
            }
    
            const resultParagraph = $("<p>").text(result);
    
            searchResults.empty();
            searchResults.append(resultParagraph);
        }
    });
    
    $(document).ready(function() {
        const searchButton = $("#pesquisar");
    
        searchButton.on("click", checkSearchLimit);
    
        function checkSearchLimit() {
            const searchesToday = Number(getCookie("searchesToday")) || 0;
    
            if (searchesToday < 3) {
                performSearch();
                setCookie("searchesToday", searchesToday + 1, 1);
            } else {
                showLimitModal();
            }
        }
    
        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(";").shift();
        }
    
        function setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            const expires = `expires=${date.toUTCString()}`;
            document.cookie = `${name}=${value}; ${expires}; path=/`;
        }
    
        function showLimitModal() {
            const modal = new bootstrap.Modal($("#modal-limite"));
            modal.show();
        }
    });
    
    function ativarModalLimite() {
        var modalLimite = $("#modal-limite");
        var bsModal = new bootstrap.Modal(modalLimite);
        bsModal.show();
    }
    
    function ativarModalProprietario() {
        var modalProprietario = $("#modal-proprietario");
        var bsModalP = new bootstrap.Modal(modalProprietario);
        bsModalP.show();
    }


    var contador = 0;
// FUNÇÃO PARA AS 3 POSSIBILIDADES DE PESQUISA E RESULTADO
const busca = $("#busca");
const pesquisar = $("#pesquisar");
const searchResults = $("#searchResults");

pesquisar.on("click", function() {
  const searchTerm = busca.val().trim().toUpperCase();
  // Limpar resultados anteriores
  //Função para puxar o popup de LIMITE DE BUSCAS
  searchResults.html('');
  contador++;
  if(contador > 3){
      $(".popup-content").css("display", "block");
  }

  /* POPUP de vídeo dentro do popup de limite */
  const btnPopup = $("#btnPopup");
  const popupContainer = $("#popupContainer");
  const btnClose = $("#btnClose");

  btnPopup.on("click", function() {
    $(".popup-content").css("display", "none");
    popupContainer.css("display", "block");
  });

  btnClose.on("click", function() {
    popupContainer.css("display", "none");
  });


  // Verificar a opção de busca selecionada
  const searchOption = $('#busca').val();

  // Fazer a busca e exibir os resultados
  let results = [];
  if (searchOption === 'P0485') {
      results = performSearchOption1(searchTerm);
  } else if (searchOption === 'P0340') {
      results = performSearchOption2(searchTerm);
  } else if (searchOption === 'P0562') {
      results = performSearchOption3(searchTerm);
  } else if (searchOption === 'P2118') {
    results = performSearchOption4(searchTerm);
  } else {
      alert('Digite um código válido.' + "\n" + 'Exemplo: P0135');
  } 
  displayResults(results);
});


function performSearchOption1(searchTerm) {
  if (searchTerm === 'P0485') {
      return [
          'P0485: Falha no Circuito Elétrico do Eletroventilador do Radiador (Fan Power/Ground Circuit).'
      ];
  } else {
      return [];
  }
}

function performSearchOption2(searchTerm) {
  if (searchTerm === 'P0340') {
      return [
          'P0340: Falha no Circuito Elétrico do Sensor "A" de Fase do Motor (CMP) do Banco 1 (Camshaft Position Sensor "A" Circuit Bank 1 or Single Sensor).'
      ];
  } else {
      return [];
  }
}

function performSearchOption3(searchTerm) {
  if (searchTerm === 'P0562') {
      return [
          'P0562: Tensão baixa da bateria gravado na memória da UCE;'
      ];
  } else {
      return [];
  }
}

function performSearchOption4(searchTerm) {
  if (searchTerm === 'P2118') {
    function showPopupPrioritario() {
      $("#propPopup").css("display", "block");
    }
    showPopupPrioritario(); 
  } else {
    return [];
  }
}


function displayResults(results) {
  for (let i = 0; i < results.length; i++) {
      const resultItem = $("<div></div>").text(results[i]);
      searchResults.append(resultItem);
  }
}