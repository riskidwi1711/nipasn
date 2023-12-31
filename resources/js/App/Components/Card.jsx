import React from "react";

export function CardMini({ icon, title, value }) {
    return (
        <div class="card mini-stats-wid">
            <div class="card-body">
                <div class="d-flex">
                    <div class="flex-grow-1">
                        <p class="text-muted fw-medium">{title}</p>
                        <h4 class="mb-0 fs-2">{value}</h4>
                    </div>

                    <div class="flex-shrink-0 align-self-center">
                        <div class="mini-stat-icon avatar-sm rounded-circle bg-primary">
                            <span class="avatar-title">
                                <i class={`${icon} font-size-24`}></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Card({ children, title, desc }) {
    return (
        <div className="card">
            {title && desc && (
                <div class="card-header bg-transparent border-bottom d-flex justify-content-between align-items-center p-4">
                    <div>
                        <h4 class="card-title">{title}</h4>
                        <p class="card-title-desc">{desc}</p>
                    </div>
                </div>
            )}
            <div className="card-body">{children}</div>
        </div>
    );
}

export function CardHeader({ children, title }) {
    return (
        <div class="section3125 mb-50 mt-4">
            <h4 class="item_title">{title}</h4>
            {children}
        </div>
    );
}
