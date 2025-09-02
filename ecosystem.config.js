module.exports = {
  apps: [
    {
      name: "agencia-up-front",
      script: "npm",
      args: "start",
      cwd: "./",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "development",
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "0.0.0.0",
      },
      // Configurações de performance
      max_memory_restart: "1G",
      node_args: "--max-old-space-size=1024",

      // Configurações de logs
      log_file: "./logs/combined.log",
      out_file: "./logs/out.log",
      error_file: "./logs/error.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",

      // Configurações de restart
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: "10s",

      // Configurações de monitoramento
      merge_logs: true,
      time: true,

      // Configurações de cluster
      instances: 2,
      exec_mode: "cluster",

      // Configurações de health check
      health_check_grace_period: 3000,
      health_check_fatal_exceptions: true,

      // Configurações de cron
      cron_restart: "0 2 * * *", // Restart diário às 2h da manhã

      // Configurações de variáveis de ambiente
      env_file: ".env.production",

      // Configurações de timeout
      kill_timeout: 5000,
      listen_timeout: 8000,

      // Configurações de graceful shutdown
      graceful_shutdown: true,
      wait_ready: true,

      // Configurações de logs
      log_type: "json",
      log_max_size: "10M",
      log_rotate_interval: "1d",
      log_rotate_count: 7,

      // Configurações de monitoramento
      pmx: true,
      monitoring: true,

      // Configurações de notificação
      notify: false,

      // Configurações de debug
      debug: false,

      // Configurações de source map
      source_map_support: true,

      // Configurações de heap dump
      heapdump: false,

      // Configurações de profiling
      prof: false,

      // Configurações de trace
      trace: false,

      // Configurações de v8 flags
      node_args: "--max-old-space-size=1024 --optimize-for-size",

      // Configurações de cluster
      instances: "max",
      exec_mode: "cluster",

      // Configurações de load balancer
      load_balancing_method: "least-connection",

      // Configurações de health check
      health_check_url: "http://localhost:3000/api/health",
      health_check_interval: 30000,
      health_check_timeout: 5000,

      // Configurações de restart
      restart_delay: 4000,
      max_restarts: 10,
      min_uptime: "10s",

      // Configurações de watch
      watch: false,
      ignore_watch: ["node_modules", "logs", "*.log", ".git", ".next", "out"],

      // Configurações de logs
      log_file: "./logs/combined.log",
      out_file: "./logs/out.log",
      error_file: "./logs/error.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",

      // Configurações de monitoramento
      merge_logs: true,
      time: true,

      // Configurações de notificação
      notify: false,

      // Configurações de debug
      debug: false,

      // Configurações de source map
      source_map_support: true,

      // Configurações de heap dump
      heapdump: false,

      // Configurações de profiling
      prof: false,

      // Configurações de trace
      trace: false,

      // Configurações de v8 flags
      node_args: "--max-old-space-size=1024 --optimize-for-size",

      // Configurações de cluster
      instances: "max",
      exec_mode: "cluster",

      // Configurações de load balancer
      load_balancing_method: "least-connection",

      // Configurações de health check
      health_check_url: "http://localhost:3000/api/health",
      health_check_interval: 30000,
      health_check_timeout: 5000,

      // Configurações de restart
      restart_delay: 4000,
      max_restarts: 10,
      min_uptime: "10s",

      // Configurações de watch
      watch: false,
      ignore_watch: ["node_modules", "logs", "*.git", ".next", "out"],
    },
  ],

  // Configurações de deploy
  deploy: {
    production: {
      user: "deploy",
      host: "SEU_IP_DA_VPS",
      ref: "origin/main",
      repo: "https://github.com/seu-usuario/agencia-up-front.git",
      path: "/var/www/agencia-up-front",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
