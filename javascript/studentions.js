$(document).ready(function () {
    const $preview = $('#userPreview');
    const $name = $('#previewName');
    const $status = $('#previewStatus');

    let lastClicked = null;

    $('.user-card').on('click', function (e) {
        e.stopPropagation();

        const name = $(this).find('span').text();
        const rect = this.getBoundingClientRect();
        const isMobile = window.innerWidth <= 768;

        if (lastClicked === this && $preview.is(':visible')) {
            $preview.fadeOut(150);
            lastClicked = null;
            return;
        }

        lastClicked = this;

        $name.text(name);

        if (isMobile) {
            $preview
                .css({ top: 'auto', left: '0', right: '0' })
                .fadeIn(200);
        } else {
            $preview
                .css({
                    top: rect.top + window.scrollY + 'px',
                    left: rect.left - 350 + 'px',
                })
                .fadeIn(200);
        }
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.user-card').length && !$(e.target).closest('#userPreview').length) {
            $preview.fadeOut(150);
            lastClicked = null;
        }
    });
});

$(document).ready(function () {
    let isVisible = true;

    $('.toggle-users').on('click', function () {
        const $panel = $('.registered-event-users');

        if (isVisible) {
            $panel.animate({ right: '-300px', opacity: 0 }, 300, function () {
                $panel.css('display', 'none');
            });
        } else {
            $panel.css({ display: 'block', right: '-300px', opacity: 0 }).animate({ right: '0', opacity: 1 }, 300);
        }

        isVisible = !isVisible;
    });
});



$(document).ready(function () {
    const $burger = $('#burgerToggle');
    const $menu = $('.event-list');
    const $overlay = $('#menuOverlay');

    $burger.on('click', function () {
        $menu.toggleClass('active');
        $overlay.toggleClass('active');
    });

    $overlay.on('click', function () {
        $menu.removeClass('active');
        $overlay.removeClass('active');
    });
});









$(document).ready(function () {
    const $overlayImage = $('#dropOverlay');
    const $overlayFile = $('#fileDropOverlay');
    const $fileInputImage = $('#fileInputImages');
    const $fileInputGeneric = $('#fileInputGeneric');

    $('button[title="Photos"]').on('click', function () {
        $overlayImage.addClass('active');
        $fileInputImage.trigger('click');
    });

    $('button[title="Files"]').on('click', function () {
        $overlayFile.addClass('active');
        $fileInputGeneric.trigger('click');
    });

    $fileInputImage.on('change', function () {
        handleFiles(this.files);
        $overlayImage.removeClass('active');
    });

    $fileInputGeneric.on('change', function () {
        handleGenericFiles(this.files);
        $overlayFile.removeClass('active');
    });

    $(document).on('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const files = e.originalEvent.dataTransfer.files;
        if (!files.length) return;

        let hasImage = false;
        let hasOther = false;

        [...files].forEach(file => {
            const name = file.name.toLowerCase();
            const ext = name.split('.').pop();

            if (file.type.startsWith('image/')) {
                hasImage = true;
            } else if (['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'zip', 'rar', 'txt'].includes(ext)) {
                hasOther = true;
            }
        });

        if (hasImage && !hasOther) {
            $overlayImage.addClass('active');
            $overlayFile.removeClass('active');
        } else if (hasOther) {
            $overlayFile.addClass('active');
            $overlayImage.removeClass('active');
        }
    });

    $(document).on('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();

        $overlayImage.removeClass('active');
        $overlayFile.removeClass('active');

        const files = e.originalEvent.dataTransfer.files;
        if (!files.length) return;

        const imageFiles = [];
        const otherFiles = [];

        [...files].forEach(file => {
            const name = file.name.toLowerCase();
            const ext = name.split('.').pop();

            if (file.type.startsWith('image/')) {
                imageFiles.push(file);
            } else if (['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'zip', 'rar', 'txt'].includes(ext)) {
                otherFiles.push(file);
            } else {
                alert(`"${file.name}" is not an accepted file type.`);
            }
        });

        if (imageFiles.length) handleFiles(imageFiles);
        if (otherFiles.length) handleGenericFiles(otherFiles);
    });

    $('.drop-overlay').on('click', function () {
        $(this).removeClass('active');
    });

    function handleFiles(files) {
        for (let file of files) {
            if (file.size > 10 * 1024 * 1024) {
                alert(`Image "${file.name}" is too large!`);
                continue;
            }

            const reader = new FileReader();
            reader.onload = function (e) {
                console.log('Image uploaded:', file.name);
                console.log('Preview URL:', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    function handleGenericFiles(files) {
        for (let file of files) {
            if (file.type.startsWith('image/')) continue;

            if (file.size > 10 * 1024 * 1024) {
                alert(`File "${file.name}" is too large!`);
                continue;
            }

            console.log('File uploaded:', file.name, '| Size:', (file.size / 1024 / 1024).toFixed(2) + 'MB');
        }
    }
});

// IFRAMES


$(document).ready(function () {
    $('.chat-message').each(function () {
        const $message = $(this).find('.user-message');
        const link = $message.find('a').attr('href');

        if (link) {
            let embedHTML = '';

            if (link.includes("youtube.com") || link.includes("youtu.be")) {
                const videoId = getYoutubeID(link);
                if (videoId) {
                    embedHTML = `
            <div class="link-preview">
              <iframe 
                src="https://www.youtube.com/embed/${videoId}" 
                frameborder="0" 
                allowfullscreen>
              </iframe>
            </div>`;
                }
            }

            else {
                const domain = new URL(link).hostname;
                embedHTML = `
          <div class="link-preview">
            <div class="preview-thumb" style="background-image: url('https://via.placeholder.com/150')"></div>
            <div class="preview-info">
              <div class="preview-title">Embedded Link</div>
              <div class="preview-desc">Preview for ${link}</div>
              <a class="preview-url" href="${link}" target="_blank">${domain}</a>
            </div>
          </div>`;
            }

            $message.after(embedHTML);
        }
    });

    function getYoutubeID(url) {
        const regExp = /(?:youtube\.com.*v=|youtu\.be\/)([^&]+)/;
        const match = url.match(regExp);
        return match && match[1] ? match[1] : null;
    }
});




