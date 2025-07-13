class ChatApp {
    constructor() {
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.chatMessages = document.getElementById('chatMessages');
        
        this.demoResponses = [
            'こんにちは！今日はどのようなご用件でしょうか？',
            'それは興味深い質問ですね。詳しく教えていただけますか？',
            'なるほど、よく理解できました。他に何かお聞きしたいことはありますか？',
            'お役に立てて嬉しいです！何か他にもお手伝いできることがあれば遠慮なくおっしゃってください。',
            'それについてもう少し詳しく説明していただけますか？',
            'とても良いアイデアですね！実現に向けて一緒に考えてみましょう。',
            'ご質問ありがとうございます。私なりの見解をお伝えしますね。',
            '面白い観点ですね。別の角度からも考えてみると...',
            'それは重要なポイントですね。詳しく分析してみましょう。',
            'お疲れ様です！今日も一日お疲れさまでした。'
        ];
        
        this.init();
    }
    
    init() {
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        
        this.messageInput.addEventListener('input', () => {
            this.sendButton.disabled = this.messageInput.value.trim() === '';
        });
        
        this.sendButton.disabled = true;
    }
    
    getCurrentTime() {
        const now = new Date();
        return now.getHours().toString().padStart(2, '0') + ':' + 
               now.getMinutes().toString().padStart(2, '0');
    }
    
    addMessage(content, isUser = false) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
        
        messageElement.innerHTML = `
            <div class="message-content">${content}</div>
            <div class="message-time">${this.getCurrentTime()}</div>
        `;
        
        this.chatMessages.appendChild(messageElement);
        this.scrollToBottom();
    }
    
    addTypingIndicator() {
        const typingElement = document.createElement('div');
        typingElement.className = 'message ai-message';
        typingElement.id = 'typing-indicator';
        
        typingElement.innerHTML = `
            <div class="typing-indicator">
                <div class="typing-dots">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        
        this.chatMessages.appendChild(typingElement);
        this.scrollToBottom();
    }
    
    removeTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    getRandomResponse() {
        return this.demoResponses[Math.floor(Math.random() * this.demoResponses.length)];
    }
    
    async sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;
        
        this.addMessage(message, true);
        this.messageInput.value = '';
        this.sendButton.disabled = true;
        
        this.addTypingIndicator();
        
        setTimeout(() => {
            this.removeTypingIndicator();
            const response = this.getRandomResponse();
            this.addMessage(response);
        }, 1000 + Math.random() * 1500);
    }
    
    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ChatApp();
});