const DATA = [
  {
    title: "Lab-S",
    slug: "lab-s",
    desc: "small lab environment",
    sessions: 10
  },
  {
    title: "Lab-L",
    slug: "lab-l",
    desc: "large lab environment",
    sessions: 10
  },
  {
    title: "ParkingLot",
    slug: "parkinglot",
    desc: "parking lot environment",
    sessions: 10
  }
];

function pad2(n){ return String(n).padStart(2, "0"); }

function render(){
  const root = document.getElementById("sequence-root");
  root.innerHTML = "";

  DATA.forEach(env => {
    const group = document.createElement("div");
    group.className = "group";

    const header = document.createElement("div");
    header.className = "group-h";
    header.textContent = `${env.title} (${env.sessions} sessions)`;
    group.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "grid";

    for(let i=1;i<=env.sessions;i++){
      const s = `s${pad2(i)}`;
      const a = document.createElement("a");
      a.className = "cardlink";
      a.href = `sequences/${env.slug}/${s}/`;
      a.innerHTML = `
        <div class="t">${env.title} ${s.toUpperCase()}</div>
        <div class="d">${env.desc}</div>
      `;
      grid.appendChild(a);
    }

    group.appendChild(grid);
    root.appendChild(group);
  });

  // citation copy
  const btn = document.getElementById("copy-bib");
  const bib = document.getElementById("bib").innerText;
  const msg = document.getElementById("copy-msg");
  btn.addEventListener("click", async () => {
    try{
      await navigator.clipboard.writeText(bib);
      msg.textContent = "Copied!";
      setTimeout(()=> msg.textContent="", 1200);
    }catch(e){
      msg.textContent = "Copy failed (browser blocked clipboard).";
    }
  });
}

render();