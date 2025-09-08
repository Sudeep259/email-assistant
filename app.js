// Sample data - in a real application, this would come from an API
const sampleData = {
  "sample_emails": [
    {
      "sender": "john.customer@example.com",
      "subject": "Urgent: Support needed for login issues",
      "body": "Hi, I'm having trouble logging into my account. This is very frustrating as I need to access important documents immediately. Please help ASAP!",
      "timestamp": "2025-09-05T07:21:54.548506",
      "sentiment": "Negative",
      "priority": "Urgent",
      "category": "Support",
      "keywords": ["login", "urgent", "access", "immediately"],
      "ai_response": "Dear John,\n\nThank you for reaching out, and I sincerely apologize for the login difficulties you're experiencing. I understand how frustrating this must be, especially when you need immediate access to your important documents.\n\nI'm prioritizing your case and will help you resolve this right away. Let me guide you through a few quick steps:\n\n1. Please try clearing your browser cache and cookies\n2. If that doesn't work, try using an incognito/private browser window\n3. As a backup, I'm sending you a temporary access link to your email\n\nI'll also investigate this issue immediately to prevent future occurrences. You should have access restored within the next 15 minutes.\n\nPlease let me know if you need any additional assistance.\n\nBest regards,\nSupport Team"
    },
    {
      "sender": "sarah.jones@company.com",
      "subject": "Query about product features",
      "body": "Hello, I would like to know more about the advanced features available in your premium plan. Could you please provide detailed information?",
      "timestamp": "2025-09-05T04:21:54.548529",
      "sentiment": "Neutral",
      "priority": "Not urgent",
      "category": "Query",
      "keywords": ["product", "features", "premium", "information"],
      "ai_response": "Hello Sarah,\n\nThank you for your interest in our premium plan! I'd be happy to provide you with detailed information about our advanced features.\n\nOur premium plan includes:\n\n• Advanced analytics and reporting dashboard\n• Priority customer support with dedicated account manager\n• API access for custom integrations\n• Advanced security features including SSO\n• Unlimited data storage and backup\n• Custom workflows and automation tools\n\nI'd love to schedule a brief demo to show you these features in action and discuss how they can benefit your specific use case. When would be a convenient time for a 15-minute call this week?\n\nI'm also attaching our detailed feature comparison guide for your reference.\n\nLooking forward to hearing from you!\n\nBest regards,\nSales Team"
    },
    {
      "sender": "mike.support@business.com",
      "subject": "Help with integration setup",
      "body": "Good morning, we're implementing your API and need assistance with the webhook configuration. The documentation is helpful but we need clarification on a few points.",
      "timestamp": "2025-09-05T08:21:54.548534",
      "sentiment": "Positive",
      "priority": "Not urgent",
      "category": "Help",
      "keywords": ["integration", "API", "webhook", "configuration"],
      "ai_response": "Good morning Mike,\n\nThank you for reaching out! I'm glad to hear that you're finding our documentation helpful, and I'm happy to assist with your webhook configuration questions.\n\nTo provide you with the most accurate guidance, could you please share:\n\n1. The specific webhook endpoints you're trying to configure\n2. Any error messages you're encountering\n3. Your current implementation approach\n\nI'd also recommend scheduling a technical consultation with our integration team. They can provide hands-on assistance and ensure your setup follows best practices.\n\nIn the meantime, I'm sending you our advanced integration guide and some code examples that might help clarify the webhook setup process.\n\nFeel free to reach out if you have any immediate questions!\n\nBest regards,\nTechnical Support Team"
    },
    {
      "sender": "angry.customer@domain.com",
      "subject": "Request for immediate refund",
      "body": "I am extremely disappointed with your service. The system crashed multiple times and I lost important data. I demand an immediate refund and compensation for my losses!",
      "timestamp": "2025-09-05T08:51:54.548538",
      "sentiment": "Negative",
      "priority": "Urgent",
      "category": "Request",
      "keywords": ["refund", "disappointed", "crashed", "compensation", "immediate"],
      "ai_response": "Dear Valued Customer,\n\nI sincerely apologize for the system crashes and the data loss you experienced. I completely understand your frustration and disappointment - this is absolutely not the level of service we strive to provide.\n\nI'm treating this as a high-priority case and taking immediate action:\n\n1. I'm escalating this to our technical team to investigate the crashes\n2. Our data recovery specialists are working to restore your lost information\n3. I'm processing an immediate refund for your current billing period\n4. We'll also provide service credits as compensation for the inconvenience\n\nI'll personally monitor this case and provide you with updates every 4 hours until we've fully resolved the situation. You should receive confirmation of your refund within 24 hours.\n\nI know this experience has been incredibly frustrating, and I'm committed to making this right.\n\nPlease don't hesitate to contact me directly if you need anything else.\n\nSincerely,\nCustomer Success Manager"
    },
    {
      "sender": "info@startup.co",
      "subject": "Support for bulk data import",
      "body": "Hi there, we're a growing startup and need support for importing large datasets into your platform. What are the best practices and limitations we should be aware of?",
      "timestamp": "2025-09-05T06:21:54.548542",
      "sentiment": "Positive",
      "priority": "Not urgent",
      "category": "Support",
      "keywords": ["bulk", "import", "datasets", "practices", "limitations"],
      "ai_response": "Hi there,\n\nCongratulations on your growth! I'm excited to help you with your bulk data import needs.\n\nHere are the key best practices and limitations for bulk data imports:\n\n**Best Practices:**\n• Use our batch import API for datasets over 1,000 records\n• Format data in CSV or JSON for optimal processing\n• Import during off-peak hours (2-6 AM EST) for faster processing\n• Split large datasets into 10,000-record chunks\n• Validate data format before importing to avoid errors\n\n**Current Limitations:**\n• Maximum file size: 100MB per import\n• Rate limit: 5 imports per hour\n• Supported formats: CSV, JSON, XML\n• Processing time: ~1 minute per 1,000 records\n\nI'd love to schedule a consultation to discuss your specific requirements and help you plan the most efficient import strategy. We also offer white-glove import services for complex datasets.\n\nWould you be available for a brief call this week?\n\nBest regards,\nCustomer Success Team"
    }
  ],
  "analytics": {
    "total_emails_24h": 5,
    "emails_by_sentiment": { "Negative": 2, "Positive": 2, "Neutral": 1 },
    "emails_by_priority": { "Not urgent": 3, "Urgent": 2 },
    "emails_by_category": { "Support": 2, "Query": 1, "Help": 1, "Request": 1 },
    "urgent_emails": 2,
    "resolved_emails": 15,
    "pending_emails": 10
  }
};

// Global state
let currentEmails = sampleData.sample_emails;
let filteredEmails = [...currentEmails];
let currentView = 'list';
let currentSection = 'dashboard';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing application...');
    
    // Initialize all sections to be hidden except dashboard
    initializeSections();
    
    updateMetrics();
    renderEmails();
    renderUrgentEmails();
    initializeNavigation();
    setupFilters();
    setupModal();
    setupRefresh();
    
    console.log('Application initialized successfully');
});

// Initialize sections visibility
function initializeSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        if (index === 0) { // First section (dashboard) should be visible
            section.classList.add('active');
            section.style.display = 'block';
        } else {
            section.classList.remove('active');
            section.style.display = 'none';
        }
    });
}

// Navigation functionality
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        // Remove any existing event listeners
        const newItem = item.cloneNode(true);
        item.parentNode.replaceChild(newItem, item);
    });
    
    // Re-select nav items after cloning
    const newNavItems = document.querySelectorAll('.nav-item');
    
    newNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetSection = this.dataset.section;
            console.log('Clicked navigation item:', targetSection);
            
            if (targetSection) {
                switchSection(targetSection);
                
                // Update active nav item
                newNavItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
                
                currentSection = targetSection;
                console.log('Switched to section:', targetSection);
            }
        });
    });
}

function switchSection(sectionName) {
    console.log('Switching to section:', sectionName);
    
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    // Show target section
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.style.display = 'block';
        
        console.log('Successfully switched to:', sectionName);
        
        // Initialize charts if switching to analytics
        if (sectionName === 'analytics') {
            setTimeout(() => {
                initializeCharts();
            }, 200);
        }
        
        // Re-render emails if switching to emails section
        if (sectionName === 'emails') {
            setTimeout(() => {
                renderEmails();
            }, 100);
        }
    } else {
        console.error('Section not found:', `${sectionName}-section`);
    }
}

// Update metrics displays
function updateMetrics() {
    const analytics = sampleData.analytics;
    
    // Top navigation metrics
    const totalEmailsEl = document.getElementById('total-emails');
    const urgentEmailsEl = document.getElementById('urgent-emails');
    const resolvedEmailsEl = document.getElementById('resolved-emails');
    
    if (totalEmailsEl) totalEmailsEl.textContent = analytics.total_emails_24h;
    if (urgentEmailsEl) urgentEmailsEl.textContent = analytics.urgent_emails;
    if (resolvedEmailsEl) resolvedEmailsEl.textContent = analytics.resolved_emails;
    
    // Dashboard metrics
    const dashboardTotalEl = document.getElementById('dashboard-total');
    const dashboardUrgentEl = document.getElementById('dashboard-urgent');
    const dashboardResolvedEl = document.getElementById('dashboard-resolved');
    const dashboardPendingEl = document.getElementById('dashboard-pending');
    
    if (dashboardTotalEl) dashboardTotalEl.textContent = analytics.total_emails_24h;
    if (dashboardUrgentEl) dashboardUrgentEl.textContent = analytics.urgent_emails;
    if (dashboardResolvedEl) dashboardResolvedEl.textContent = analytics.resolved_emails;
    if (dashboardPendingEl) dashboardPendingEl.textContent = analytics.pending_emails;
}

// Email rendering functions
function renderEmails() {
    const emailList = document.getElementById('email-list');
    const recentEmailList = document.getElementById('recent-email-list');
    
    if (emailList) {
        emailList.innerHTML = '';
        filteredEmails.forEach(email => {
            const emailElement = createEmailElement(email, false);
            emailList.appendChild(emailElement);
        });
    }
    
    if (recentEmailList) {
        recentEmailList.innerHTML = '';
        // Show first 3 emails in recent list
        currentEmails.slice(0, 3).forEach(email => {
            const emailElement = createEmailElement(email, true);
            recentEmailList.appendChild(emailElement);
        });
    }
}

function renderUrgentEmails() {
    const urgentEmailList = document.getElementById('urgent-email-list');
    if (!urgentEmailList) return;
    
    urgentEmailList.innerHTML = '';
    const urgentEmails = currentEmails.filter(email => email.priority === 'Urgent');
    
    if (urgentEmails.length === 0) {
        urgentEmailList.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No urgent emails at this time.</p>';
        return;
    }
    
    urgentEmails.forEach(email => {
        const emailElement = createEmailElement(email, true);
        emailElement.classList.add('urgent');
        urgentEmailList.appendChild(emailElement);
    });
}

function createEmailElement(email, isPreview = false) {
    const emailDiv = document.createElement('div');
    emailDiv.className = 'email-item';
    emailDiv.dataset.emailId = email.sender + email.timestamp;
    
    if (email.priority === 'Urgent') {
        emailDiv.classList.add('urgent');
    }
    
    const timestamp = new Date(email.timestamp).toLocaleString();
    const preview = isPreview ? email.body.substring(0, 100) + '...' : '';
    
    emailDiv.innerHTML = `
        <div class="email-header">
            <div class="email-sender">${email.sender}</div>
            <div class="email-timestamp">${timestamp}</div>
        </div>
        <div class="email-subject">${email.subject}</div>
        ${preview ? `<div class="email-preview">${preview}</div>` : ''}
        <div class="email-meta">
            <span class="status status--${email.sentiment.toLowerCase()}">${email.sentiment}</span>
            <span class="status status--${email.priority.toLowerCase().replace(' ', '-')}">${email.priority}</span>
            <span class="status status--info">${email.category}</span>
        </div>
    `;
    
    // Add click handler for email modal - use a more reliable event binding
    emailDiv.style.cursor = 'pointer';
    emailDiv.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Email clicked, opening modal for:', email.subject);
        openEmailModal(email);
        return false;
    };
    
    return emailDiv;
}

// Filter functionality
function setupFilters() {
    const searchInput = document.getElementById('email-search');
    const sentimentFilter = document.getElementById('sentiment-filter');
    const priorityFilter = document.getElementById('priority-filter');
    const toggleViewBtn = document.getElementById('toggle-view');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterEmails);
    }
    
    if (sentimentFilter) {
        sentimentFilter.addEventListener('change', filterEmails);
    }
    
    if (priorityFilter) {
        priorityFilter.addEventListener('change', filterEmails);
    }
    
    if (toggleViewBtn) {
        toggleViewBtn.addEventListener('click', toggleView);
    }
}

function filterEmails() {
    const searchTerm = document.getElementById('email-search')?.value.toLowerCase() || '';
    const sentimentFilter = document.getElementById('sentiment-filter')?.value || '';
    const priorityFilter = document.getElementById('priority-filter')?.value || '';
    
    filteredEmails = currentEmails.filter(email => {
        const matchesSearch = !searchTerm || 
            email.sender.toLowerCase().includes(searchTerm) ||
            email.subject.toLowerCase().includes(searchTerm) ||
            email.body.toLowerCase().includes(searchTerm);
            
        const matchesSentiment = !sentimentFilter || email.sentiment === sentimentFilter;
        const matchesPriority = !priorityFilter || email.priority === priorityFilter;
        
        return matchesSearch && matchesSentiment && matchesPriority;
    });
    
    renderEmails();
}

function toggleView() {
    const toggleBtn = document.getElementById('toggle-view');
    const emailList = document.getElementById('email-list');
    
    if (!toggleBtn || !emailList) return;
    
    if (currentView === 'list') {
        currentView = 'card';
        toggleBtn.textContent = 'List View';
        emailList.style.gridTemplateColumns = 'repeat(auto-fill, minmax(350px, 1fr))';
    } else {
        currentView = 'list';
        toggleBtn.textContent = 'Card View';
        emailList.style.gridTemplateColumns = '1fr';
    }
}

// Modal functionality
function setupModal() {
    const emailModal = document.getElementById('email-modal');
    const modalClose = document.querySelector('.modal-close');
    
    if (modalClose) {
        modalClose.onclick = function(e) {
            e.preventDefault();
            closeEmailModal();
            return false;
        };
    }
    
    if (emailModal) {
        emailModal.onclick = function(e) {
            if (e.target === emailModal) {
                closeEmailModal();
            }
        };
    }
    
    // Modal action buttons
    const markResolvedBtn = document.getElementById('mark-resolved');
    const editResponseBtn = document.getElementById('edit-response');
    const sendResponseBtn = document.getElementById('send-response');
    
    if (markResolvedBtn) {
        markResolvedBtn.onclick = markAsResolved;
    }
    
    if (editResponseBtn) {
        editResponseBtn.onclick = editResponse;
    }
    
    if (sendResponseBtn) {
        sendResponseBtn.onclick = sendResponse;
    }
}

function openEmailModal(email) {
    const emailModal = document.getElementById('email-modal');
    if (!emailModal) {
        console.error('Email modal not found');
        return;
    }
    
    console.log('Opening modal for email:', email);
    
    // Populate modal content
    const modalSubject = document.getElementById('modal-subject');
    const modalSender = document.getElementById('modal-sender');
    const modalDate = document.getElementById('modal-date');
    const modalBody = document.getElementById('modal-body');
    const aiResponseText = document.getElementById('ai-response-text');
    
    if (modalSubject) modalSubject.textContent = email.subject;
    if (modalSender) modalSender.textContent = email.sender;
    if (modalDate) modalDate.textContent = new Date(email.timestamp).toLocaleString();
    if (modalBody) modalBody.textContent = email.body;
    if (aiResponseText) aiResponseText.value = email.ai_response;
    
    // Set sentiment and priority badges
    const sentimentBadge = document.getElementById('modal-sentiment');
    const priorityBadge = document.getElementById('modal-priority');
    
    if (sentimentBadge) {
        sentimentBadge.textContent = email.sentiment;
        sentimentBadge.className = `status status--${email.sentiment.toLowerCase()}`;
    }
    
    if (priorityBadge) {
        priorityBadge.textContent = email.priority;
        priorityBadge.className = `status status--${email.priority.toLowerCase().replace(' ', '-')}`;
    }
    
    // Populate keywords
    const keywordsContainer = document.getElementById('modal-keywords');
    if (keywordsContainer) {
        keywordsContainer.innerHTML = '';
        email.keywords.forEach(keyword => {
            const tag = document.createElement('span');
            tag.className = 'keyword-tag';
            tag.textContent = keyword;
            keywordsContainer.appendChild(tag);
        });
    }
    
    // Show modal
    emailModal.classList.remove('hidden');
    emailModal.style.display = 'flex';
    console.log('Modal should now be visible');
}

function closeEmailModal() {
    const emailModal = document.getElementById('email-modal');
    if (emailModal) {
        emailModal.classList.add('hidden');
        emailModal.style.display = 'none';
        console.log('Modal closed');
    }
}

function markAsResolved() {
    showNotification('Email marked as resolved!');
    closeEmailModal();
    // In a real app, this would update the email status
}

function editResponse() {
    const responseTextarea = document.getElementById('ai-response-text');
    if (responseTextarea) {
        responseTextarea.focus();
        responseTextarea.select();
    }
}

function sendResponse() {
    const responseText = document.getElementById('ai-response-text')?.value;
    if (responseText && responseText.trim()) {
        showNotification('Response sent successfully!');
        closeEmailModal();
        // In a real app, this would send the email
    } else {
        showNotification('Please enter a response before sending.');
    }
}

// Charts initialization
function initializeCharts() {
    // Clear any existing charts
    const sentimentCtx = document.getElementById('sentiment-chart');
    const priorityCtx = document.getElementById('priority-chart');
    const categoryCtx = document.getElementById('category-chart');
    
    if (sentimentCtx) {
        // Destroy existing chart if it exists
        if (sentimentCtx.chart) {
            sentimentCtx.chart.destroy();
        }
        createSentimentChart();
    }
    
    if (priorityCtx) {
        if (priorityCtx.chart) {
            priorityCtx.chart.destroy();
        }
        createPriorityChart();
    }
    
    if (categoryCtx) {
        if (categoryCtx.chart) {
            categoryCtx.chart.destroy();
        }
        createCategoryChart();
    }
}

function createSentimentChart() {
    const ctx = document.getElementById('sentiment-chart');
    if (!ctx) return;
    
    const sentimentData = sampleData.analytics.emails_by_sentiment;
    
    ctx.chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(sentimentData),
            datasets: [{
                data: Object.values(sentimentData),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'var(--color-text)',
                        font: {
                            family: 'FKGroteskNeue, Inter, sans-serif'
                        }
                    }
                }
            }
        }
    });
}

function createPriorityChart() {
    const ctx = document.getElementById('priority-chart');
    if (!ctx) return;
    
    const priorityData = sampleData.analytics.emails_by_priority;
    
    ctx.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(priorityData),
            datasets: [{
                data: Object.values(priorityData),
                backgroundColor: ['#ECEBD5', '#5D878F'],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'var(--color-text)',
                        font: {
                            family: 'FKGroteskNeue, Inter, sans-serif'
                        }
                    }
                }
            }
        }
    });
}

function createCategoryChart() {
    const ctx = document.getElementById('category-chart');
    if (!ctx) return;
    
    const categoryData = sampleData.analytics.emails_by_category;
    
    ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(categoryData),
            datasets: [{
                label: 'Number of Emails',
                data: Object.values(categoryData),
                backgroundColor: ['#DB4545', '#D2BA4C', '#964325', '#944454'],
                borderColor: ['#DB4545', '#D2BA4C', '#964325', '#944454'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'var(--color-text)',
                        font: {
                            family: 'FKGroteskNeue, Inter, sans-serif'
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: 'var(--color-text)',
                        font: {
                            family: 'FKGroteskNeue, Inter, sans-serif'
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });
}

// Refresh functionality
function setupRefresh() {
    const refreshBtn = document.getElementById('refresh-btn');
    if (refreshBtn) {
        refreshBtn.onclick = refreshData;
    }
}

function refreshData() {
    const refreshBtn = document.getElementById('refresh-btn');
    if (refreshBtn) {
        refreshBtn.textContent = 'Refreshing...';
        refreshBtn.disabled = true;
    }
    
    // Simulate API call delay
    setTimeout(() => {
        updateMetrics();
        renderEmails();
        renderUrgentEmails();
        
        if (refreshBtn) {
            refreshBtn.textContent = 'Refresh';
            refreshBtn.disabled = false;
        }
        
        // Show refresh notification
        showNotification('Data refreshed successfully!');
    }, 1000);
}

function showNotification(message) {
    // Create temporary notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-success);
        color: var(--color-btn-primary-text);
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC to close modal
    if (e.key === 'Escape') {
        const emailModal = document.getElementById('email-modal');
        if (emailModal && !emailModal.classList.contains('hidden')) {
            closeEmailModal();
        }
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('email-search');
        if (searchInput && currentSection === 'emails') {
            searchInput.focus();
        }
    }
});

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);