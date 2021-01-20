using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CardZoom : MonoBehaviour
{
    public GameObject Canvas;
    public GameObject PlayerArea;
    public GameObject EnemyArea;
    public GameObject Dropzone;
    private GameObject zoomCard;

    public void Awake()
    {
        Canvas = GameObject.Find("Main Canvas");
        PlayerArea = GameObject.Find("Player Field");
        EnemyArea = GameObject.Find("EnemyArea");
        Dropzone = GameObject.Find("Dropzone");


}

    public void OnHoverEnter() 
    {
        if (transform.parent == PlayerArea.transform) 
        {


            zoomCard = Instantiate(gameObject, new Vector2(Input.mousePosition.x, Input.mousePosition.y + 200), Quaternion.identity);
            zoomCard.transform.SetParent(Canvas.transform, false);
            zoomCard.layer = LayerMask.NameToLayer("Zoom");

            RectTransform rect = zoomCard.GetComponent<RectTransform>();
            rect.sizeDelta = new Vector2(140, 244);
        }
        else if (transform.parent == EnemyArea.transform)
        {
            zoomCard = Instantiate(gameObject, new Vector2(Input.mousePosition.x, Input.mousePosition.y - 200), Quaternion.identity);
            zoomCard.transform.SetParent(Canvas.transform, false);
            zoomCard.layer = LayerMask.NameToLayer("Zoom");

            RectTransform rect = zoomCard.GetComponent<RectTransform>();
            rect.sizeDelta = new Vector2(140, 244);
        }
        else if(transform.parent == Dropzone.transform)
        {
            zoomCard = Instantiate(gameObject, new Vector2(Input.mousePosition.x, Input.mousePosition.y + 100), Quaternion.identity);
            zoomCard.transform.SetParent(Canvas.transform, false);
            zoomCard.layer = LayerMask.NameToLayer("Zoom");

            RectTransform rect = zoomCard.GetComponent<RectTransform>();
            rect.sizeDelta = new Vector2(60, 90);
        }
        
        
    }
    public void OnHoverExit() 
    {
        Destroy(zoomCard);
    }
}
