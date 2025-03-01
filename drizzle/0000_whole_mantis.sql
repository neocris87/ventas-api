CREATE TABLE `usuarios` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nombre` varchar(50) NOT NULL,
	`password` varchar(255) NOT NULL,
	`usuario` varchar(50) NOT NULL,
	`contacto` varchar(155),
	`direccion` varchar(255),
	`estado` boolean DEFAULT true,
	`roles` text,
	`updated_at` timestamp,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
