/* Layout preview only: no authentication or credential collection. */
(()=>{
 const trigger=document.createElement("button");trigger.type="button";trigger.textContent="Sign in";trigger.setAttribute("aria-haspopup","dialog");
 document.querySelector(".main-nav").append(trigger);
 const dialog=document.createElement("dialog");dialog.className="account-dialog";dialog.setAttribute("aria-labelledby","account-title");dialog.setAttribute("aria-describedby","account-description");
 dialog.innerHTML=`<button type="button" class="account-dialog-close" aria-label="Close sign-in preview">Close</button><span class="beta-badge">BETA PREVIEW</span><h2 id="account-title">Save your place</h2><p id="account-description">Sign in to continue your lessons across devices.</p><button type="button" class="button button-secondary" disabled>Continue with Google</button><button type="button" class="button button-secondary" disabled>Continue with email</button><p role="status">Not connected yet. Accounts and cloud saving are not available in this preview.</p><button type="button" class="button button-primary" data-guest>Continue without an account</button>`;
 document.body.append(dialog);
 trigger.onclick=()=>dialog.showModal();
 dialog.querySelector(".account-dialog-close").onclick=()=>dialog.close();
 dialog.querySelector("[data-guest]").onclick=()=>dialog.close();
 dialog.addEventListener("click",event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
})();
