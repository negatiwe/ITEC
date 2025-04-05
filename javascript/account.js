document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleSidebar");
    const sidebar = document.querySelector(".account-sidebar");

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });

    document.querySelectorAll(".sidebar-item").forEach(item => {
        item.addEventListener("click", () => {
            document.querySelectorAll(".sidebar-item").forEach(i => i.classList.remove("active"));
            document.querySelectorAll(".settings-section").forEach(s => s.classList.remove("active"));

            item.classList.add("active");
            const sectionId = item.getAttribute("data-section");
            const sectionEl = document.getElementById(sectionId);
            sectionEl.classList.add("active");

            if (window.innerWidth <= 768) {
                sidebar.classList.remove("open");
            }
        });
    });
});

const interestSelect = document.getElementById("interest-select");
const previewBox = document.getElementById("interest-live-preview");

function updateInterestPlaceholder() {
    const hasTags = previewBox.querySelectorAll(".interest-tag").length > 0;
    const existingPlaceholder = previewBox.querySelector(".no-interests");

    if (!hasTags && !existingPlaceholder) {
        const placeholder = document.createElement("span");
        placeholder.classList.add("no-interests");
        placeholder.textContent = "No interests selected yet";
        previewBox.appendChild(placeholder);
    }

    if (hasTags && existingPlaceholder) {
        existingPlaceholder.remove();
    }
}

if (interestSelect && previewBox) {
    interestSelect.addEventListener("change", function () {
        const value = this.value;
        if (!value) return;

        const exists = Array.from(previewBox.children).some(
            tag => tag.dataset.value === value
        );

        if (!exists) {
            const tag = document.createElement("span");
            tag.classList.add("interest-tag");
            tag.dataset.value = value;
            tag.innerHTML = `${value}<span class="remove-tag">×</span>`;
            previewBox.appendChild(tag);
            updateInterestPlaceholder();
        }

        this.value = "";
    });

    previewBox.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-tag")) {
            e.target.parentElement.remove();
            updateInterestPlaceholder();
        }
    });

    updateInterestPlaceholder();
}

