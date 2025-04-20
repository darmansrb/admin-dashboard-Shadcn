<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [
        'survey_id',
        'question_text',
        'question_type',
        'is_required',
        'options',
        'order',
        'helper_text',
        'min_value',
        'max_value',
        'placeholder',
        'default_value',
        'validation_rules',
        'created_by',
    ];
}
