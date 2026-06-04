// Scroll to signup section
function scrollToSignup() {
    document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });
}

// Handle signup form submission
function handleSignup(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const phone = form.elements[2].value;
    const plan = form.elements[3].value;
    
    if (!name || !email || !phone || !plan) {
        alert('Please fill all fields');
        return;
    }
    
    // Store data
    const userData = {
        name: name,
        email: email,
        phone: phone,
        plan: plan,
        date: new Date().toLocaleDateString()
    };
    
    // Save to localStorage
    let users = JSON.parse(localStorage.getItem('taurustips_users')) || [];
    users.push(userData);
    localStorage.setItem('taurustips_users', JSON.stringify(users));
    
    // Show success message
    alert(`✅ Welcome to TaurusProTips, ${name}!\n\nPlan: ${plan}\nWe'll contact you at ${phone} to confirm your subscription.\n\n🐂 Let's make you RICH!`);
    
    // Reset form
    form.reset();
    
    // TODO: Integrate M-Pesa payment here
    console.log('User registered:', userData);
}

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Load users from localStorage (for admin panel later)
function loadUsers() {
    const users = JSON.parse(localStorage.getItem('taurustips_users')) || [];
    console.log('Registered users:', users);
    return users;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🐂 TaurusProTips loaded successfully!');
    console.log('Users registered:', loadUsers().length);
});