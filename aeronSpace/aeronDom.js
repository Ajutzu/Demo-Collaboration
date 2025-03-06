DOM.insertAdjacentHTML(
  "beforeend",
  `
<div class="container d-flex flex-column justify-content-center align-items-center bg-light py-4" style="height: auto; min-height: 100vh;">

    <div class="row w-100 justify-content-center align-items-center text-center text-md-start">
        
        <div class="col-12 col-md-4 d-flex justify-content-md-end justify-content-center mb-3 mb-md-0">
            <img src="https://media2.giphy.com/media/irBHYSZxbUifTxTgBL/giphy.gif?cid=790b7611fzviljme2g32j2f8mu6udntcxnr93txn0w0xtcxx&ep=v1_gifs_search&rid=giphy.gif&ct=g" 
                 class="img-fluid rounded"
                 style="max-height: 300px">
        </div>

        <!-- Text Section -->
        <div class="col-12 col-md-6 d-flex flex-column align-items-start">

            <div class="mb-4 d-flex align-items-center justify-content-center gap-2">
                <img class="img-fluid" style="height: 50px; width: auto;" src="https://i.pinimg.com/originals/5f/93/49/5f934966a1d20bae1909c9ef2278bd4c.gif" alt="Goku GIF">
                <h2 class="mb-0">僕は孫悟空だ！</h2>
            </div>

            <p class="text-muted mb-4" style="text-align: justify;">
                「力は欲望ではなく、必要に応じて生まれる。まずはその必要性を作り出さなければならない。」– 孫悟空（ドラゴンボールZ）  
                これは、真の強さは単なる願望から生まれるものではなく、困難に直面したときに自分を押し上げることで得られることを思い出させてくれます。  
                プログラミングでも、人生でも、戦いでも、成長は限界を超えたときに起こるのです。
            </p>
            <div class="d-flex gap-2 flex-wrap justify-content-start">
                <button class="btn btn-sm btn-danger">スーパーサイヤ人</button>
                <button class="btn btn-sm btn-warning">スーパーサイヤ人２</button>
                <button class="btn btn-sm btn-primary">スーパーサイヤ人ブルー</button>
                <button class="btn btn-sm btn-success">伝説のサイヤ人</button>

            </div>
        </div>

    </div>

    <span class="text-muted bg-light shadow-sm p-2 rounded" style="font-size: 14px; position: absolute; top: 5px; left: 5px;">
        🔴 修正 by AJ™
    </span>
</div>


    `
);
