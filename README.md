<h1 align="center" style="font-weight: bold;">Simulator for cash or installment purchase</h1>

<p align="center">
 <a href="#technologies">Technologies</a> • 
 <a href="#description">Description</a> • 
 <a href="#installation">Installation</a> •
 <a href="#simulation">Simulation</a> •
 <a href="#autor">Autor</a> •
 <a href="#contribute">Contribute</a>
</p>

<h2 id="technologies">💻 Technologies</h2>

![Static Badge](https://img.shields.io/badge/typescript%20-%20%233178C%20?style=for-the-badge&logo=typescript&color=%23000000) ![Static Badge](https://img.shields.io/badge/nestjs%20-%20%23E0234E?style=for-the-badge&logo=nestjs&logoColor=%23E0234E&color=%23000000)

<h2 id="description">📚 Description</h2>

Back-end application of the simulator for cash or installment purchase. This application helps you decide whether to pay for a purchase in cash or in installments and invest the remaining amount. It takes into account the current Selic rate, taxes applied to the investment income and costs when withdrawing the investment. The simulation considers the return on a CDB with daily liquidity (100% of the CDI) and how taxes influence the final value, when withdrawing the amount invested monthly. This way, you can accurately compare which option results in a better financial return, considering both the investment interest and the taxes when withdrawing the amount invested.

<h2 id="simulation">🧮 Simulation</h2>

**Scenario:**
- **Selic rate**: 12.25% per year
- **Purchase value (cash)**: R$3900
- **Purchase value (installments)**: 10x of R$400

**When purchasing in installments**:

1. The initial cash value of R$4000 is reduced by the first installment of R$400, leaving R$3600 to be invested in a CDB (100% of CDI).
2. The balance and interest are calculated as follows for each month:

- **1st month**: R$3600 generates R$34.83 (gross)
- **2nd month**: R$3200 generates R$30.96 (gross)
- **3rd month**: R$2800 generates R$27.09 (gross)
- **4th month**: R$2400 generates R$23.22 (gross)
- **5th month**: R$2000 generates R$19.35 (gross)
- **6th month**: R$1600 generates R$15.48 (gross)
- **7th month**: R$1200 generates R$11.61 (gross)
- **8th month**: R$800 generates R$7.74 (gross)
- **9th month**: R$400 generates R$3.87 (gross)

**Total gross earnings**: R$174.15  
**Income tax rate on earnings**: 22.5%

**Total net earnings after tax**: R$134.97

**Conclusion**: Given the calculations above, it is better to buy in installments. By buying in cash, you will save R$100. However, by buying in installments and investing the remaining amount, you will save R$134.97.

<h2 id="installation">⚙️ Installation</h2>

- 1: Clone this repository: `git clone https://github.com/victorozoterio/simulator-for-cash-or-installment-purchase-backend.git`;
- 2: Create a `.env` file from the `.env.example` file;
- 3: Fill in all the necessary variables in the `.env`;
- 4: Install the dependencies, running the command: `npm install`;
- 5: Run the application, running the command: `npm run start:dev`

<h2 id="autor">🧑🏻‍💻 Autor</h2>

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/victorozoterio">
        <img src="https://avatars.githubusercontent.com/u/165734095?v=4" width="100px;" alt="Victor Ozoterio Profile Picture"/><br>
        <sub>
          <a href="https://github.com/victorozoterio">
          Victor Ozoterio</a>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h2 id="contribute">🚀 Contribute</h2>

1. Clone this repository: `git clone https://github.com/victorozoterio/simulator-for-cash-or-installment-purchase-backend.git`;
2. Create feature/branch: `git checkout -b feature/NAME`