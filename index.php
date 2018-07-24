<?php

Kirby::plugin('wottpal/social', [
    'fields' => [
        'social' => [
            'props' => [
                'value' => function ($value = null) {
                    return Yaml::decode($value);
                }
            ],
        ],
    ]
]);
