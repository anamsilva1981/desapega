## 📌 Menu de Navegação

O projeto possui um menu fixo no topo desenvolvido com [PrimeNG Toolbar](https://primeng.org/toolbar).  

Ele contém:
- **Logo** no canto esquerdo
- **Campo de busca** centralizado
- **Ícones de notificações e configurações**
- **Avatar do usuário** no canto direito

---

### 🖼 Visual do Menu
![Menu do Desapega](/src/assets/imagens/docs/header.png)

> A imagem acima mostra o layout inicial do menu implementado.

---

### 💻 Código do Menu

```html
<p-toolbar styleClass="shadow-1 border-bottom-2 border-primary">
  <ng-template pTemplate="start">
    <div class="flex align-items-center gap-2">
      <img src="assets/imagens/logotipo2.png" alt="logotipo" width="40" height="32" />
      <span class="font-bold text-lg">Desapega</span>
    </div>
  </ng-template>

  <ng-template pTemplate="center">
    <input
      type="text"
      pInputText
      placeholder="Search"
      style="width: 40vw; max-width: 500px;"
    />
  </ng-template>

  <ng-template pTemplate="end">
    <div class="flex align-items-center gap-3">
      <i class="pi pi-bell cursor-pointer text-xl"></i>
      <i class="pi pi-cog cursor-pointer text-xl"></i>
      <p-avatar
        image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
        shape="circle"
      />
    </div>
  </ng-template>
</p-toolbar>
