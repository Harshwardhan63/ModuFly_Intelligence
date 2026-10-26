// Chooses between the dashboard and the batch details page.
(function () {
    const prefix = '#batchqr=';
    if (location.hash.startsWith(prefix)) {
        const root = document.getElementById('root');
        const esc = value => String(value ?? '—').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
        try {
            const encoded = decodeURIComponent(location.hash.slice(prefix.length));
            const batch = JSON.parse(decodeURIComponent(escape(atob(encoded))));
            if (batch.app !== 'ModuFly AI' || batch.record_type !== 'batch' || !batch.id)
                throw new Error('This QR code does not contain a valid ModuFly AI batch.');
            const rows = [
                ['Batch ID', batch.id], ['Batch name / feedstock', batch.name],
                ['Assigned module', 'Module 0' + batch.module], ['Waste input', `${batch.waste_kg ?? '—'} kg`],
                ['Lifecycle stage', batch.stage],
                ['Created at', batch.created_at ? new Date(batch.created_at).toLocaleString() : '—'],
                ['Source', batch.source]
            ];
            root.innerHTML = `<main class="scan-page"><div class="scan-wrap"><div class="scan-brand">ModuFly AI · Traceability</div><h1>Batch details</h1><p class="scan-intro">This table shows the information encoded in the batch QR code. Each detail is listed in its own row for quick checking.</p><section class="scan-card"><table class="scan-table"><tbody>${rows.map(([label, value]) => `<tr><th scope="row">${esc(label)}</th><td>${esc(value)}</td></tr>`).join('')}</tbody></table></section><div class="scan-actions"><a href="${esc(location.pathname + location.search)}">Open ModuFly AI</a><button type="button" onclick="window.print()">Print details</button></div></div></main>`;
        }
        catch (error) {
            root.innerHTML = `<main class="scan-page"><div class="scan-wrap"><div class="scan-brand">ModuFly AI · Traceability</div><h1>Unable to read batch</h1><p class="scan-error">${esc(error.message || 'The QR code data is invalid.')}</p><div class="scan-actions"><a href="${esc(location.pathname + location.search)}">Open ModuFly AI</a></div></div></main>`;
        }
    }
    else {
        const app = document.createElement('script');
        app.src = 'assets/app.js';
        document.body.appendChild(app);
    }
})();

