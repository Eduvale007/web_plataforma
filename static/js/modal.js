  // Modal functionality
        function openModal(templateName) {
            document.getElementById('modal-title').textContent = templateName;
            document.getElementById('templateModal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('templateModal').style.display = 'none';
        }

        function switchTab(tabName) {
            // Hide all tab contents
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => content.style.display = 'none');
            
            // Remove active class from all tabs
            const tabs = document.querySelectorAll('.modal-tab');
            tabs.forEach(tab => tab.classList.remove('active'));
            
            // Show selected tab content
            document.getElementById(tabName + '-content').style.display = 'block';
            
            // Add active class to clicked tab
            event.target.classList.add('active');
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('templateModal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Search functionality
        document.querySelector('.search-bar input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        document.querySelector('.search-btn').addEventListener('click', performSearch);

        function performSearch() {
            const query = document.querySelector('.search-bar input').value;
            alert('Buscando por: ' + query);
            // Here you would implement actual search functionality
        }

        // Filter functionality
        document.querySelector('.sidebar .cta-button').addEventListener('click', function() {
            const checkedFilters = document.querySelectorAll('.sidebar input:checked');
            const filters = Array.from(checkedFilters).map(input => input.id);
            console.log('Filtros aplicados:', filters);
            alert('Filtros aplicados! Veja o console para detalhes.');
        });

        // Sort functionality
        document.querySelector('.sort-dropdown').addEventListener('change', function() {
            const sortBy = this.value;
            console.log('Ordenando por:', sortBy);
            alert('Ordenando por: ' + sortBy);
        });

        // Add to cart functionality
        document.querySelectorAll('.btn-cart').forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const templateCard = this.closest('.template-card');
                const templateName = templateCard.querySelector('.template-title').textContent;
                alert('Template "' + templateName + '" adicionado ao carrinho!');
            });
        });

        // Add to favorites functionality
        document.querySelectorAll('.btn-favorite').forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const templateCard = this.closest('.template-card');
                const templateName = templateCard.querySelector('.template-title').textContent;
                this.style.background = this.style.background === 'rgb(255, 64, 129)' ? 'transparent' : '#ff4081';
                this.style.color = this.style.color === 'white' ? '#ff4081' : 'white';
                alert('Template "' + templateName + '" ' + (this.style.background === 'rgb(255, 64, 129)' ? 'adicionado aos' : 'removido dos') + ' favoritos!');
            });
        });

        // Pagination functionality
        document.querySelectorAll('.pagination button').forEach(button => {
            button.addEventListener('click', function() {
                if (this.textContent === '←' || this.textContent === '→') {
                    console.log('Navegando para página anterior/próxima');
                } else if (this.textContent !== '...') {
                    // Remove active class from all buttons
                    document.querySelectorAll('.pagination button').forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    console.log('Navegando para página:', this.textContent);
                }
            });
        });

        // Navigation links
        document.getElementById('cart-link').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Redirecionando para o carrinho...');
        });

        document.getElementById('account-link').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Redirecionando para a conta...');
        });

        document.getElementById('dashboard-link').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Redirecionando para o dashboard...');
        });

        // Hero CTA button
        document.querySelector('.hero-ctg .cta-button').addEventListener('click', function() {
            document.querySelector('.templates-section').scrollIntoView({ behavior: 'smooth' });
        });

        // Smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Add loading animation to buttons
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function() {
                const originalText = this.textContent;
                this.textContent = 'Carregando...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.disabled = false;
                }, 1000);
            });
        });

        // Responsive menu toggle (for mobile)
        if (window.innerWidth <= 768) {
            const mobileMenuToggle = document.createElement('button');
            mobileMenuToggle.textContent = '☰';
            mobileMenuToggle.style.cssText = `
                background: none;
                border: none;
                color: white;
                font-size: 24px;
                cursor: pointer;
                display: block;
            `;
            
            document.querySelector('.header-content').prepend(mobileMenuToggle);
            
            mobileMenuToggle.addEventListener('click', function() {
                const navLinks = document.querySelector('.nav-links');
                navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
            });
        }

        // Add hover effects to template cards
        document.querySelectorAll('.template-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 20px rgba(255, 64, 129, 0.3)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });

        // Initialize tooltips
        document.querySelectorAll('[title]').forEach(element => {
            element.addEventListener('mouseenter', function() {
                const tooltip = document.createElement('div');
                tooltip.textContent = this.getAttribute('title');
                tooltip.style.cssText = `
                    position: absolute;
                    background: #333;
                    color: white;
                    padding: 5px 10px;
                    border-radius: 4px;
                    font-size: 12px;
                    z-index: 1000;
                    pointer-events: none;
                `;
                document.body.appendChild(tooltip);
                
                this.addEventListener('mousemove', function(e) {
                    tooltip.style.left = e.pageX + 10 + 'px';
                    tooltip.style.top = e.pageY + 10 + 'px';
                });
                
                this.addEventListener('mouseleave', function() {
                    document.body.removeChild(tooltip);
                });
            });
        });