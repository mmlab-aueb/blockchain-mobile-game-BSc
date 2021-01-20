package com.example.mmlabapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class MainActivity2 extends AppCompatActivity {

    EditText e1;
    String text2;
    String text;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        e1 = (EditText)findViewById(R.id.editText2);
        Intent intent = getIntent();
        text = intent.getStringExtra("Name");


    }

    public void send(View v){

        com.example.mmlabapp.MessageSender messageSender = new com.example.mmlabapp.MessageSender();
        text2 = text + "/" +e1.getText().toString();
        messageSender.execute(text2);


    }


}